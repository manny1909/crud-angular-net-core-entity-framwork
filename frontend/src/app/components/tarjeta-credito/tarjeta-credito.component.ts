import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from 'src/app/services/tarjeta.service';
@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  lista_tarjetas: any[]=[]
  form:FormGroup;
  accion: string="agregar"
  id: number | undefined;
  constructor(private fb: FormBuilder, private toastr: ToastrService,
             private _tarjetaService: TarjetaService ) { 
    this.form=this.fb.group(
      {
        titular:['',[Validators.required,Validators.maxLength(45),Validators.minLength(5)]] ,
        numero_Tarjeta:['',[Validators.required,Validators.maxLength(16),Validators.minLength(16)]],
        fecha_Expiracion:['',[Validators.required,Validators.maxLength(5),Validators.minLength(5)]],
        cvv:['',[Validators.required,Validators.maxLength(3),Validators.minLength(3)]]
      }
    );
  }

  ngOnInit(): void {
    this.obtenerTarjetas();
  }
  obtenerTarjetas(){
    
    this._tarjetaService.getListTarjetas().subscribe(
      data=>{
        this.lista_tarjetas=data;
      },
      error=>{
        console.log(error);
        
      }
    )
  }
  guardar_tarjeta(){
    const tarjeta:any=
    {
      titular:this.form.get('titular')?.value,
      numero_Tarjeta:this.form.get('numero_Tarjeta')?.value,
      fecha_Expiracion:this.form.get('fecha_Expiracion')?.value,
      cvv:this.form.get('cvv')?.value,
    }
    if(this.id==undefined){
      
      this._tarjetaService.saveTarjeta(tarjeta).subscribe(data=>{
      this.toastr.success('La tarjeta fue actualizada con exito!', 'Tarjeta registrada');
      this.obtenerTarjetas();
    this.form.reset();
    },error=>{
      console.log(error);
      this.toastr.error('Ha ocurrido un error','Error')
    })
    }
    else{
      tarjeta.id=this.id;
      this._tarjetaService.updateTarjeta(this.id,tarjeta).subscribe(data=>{
        this.form.reset();
        this.accion="agregar"
        this.id=undefined
        this.toastr.info('La tarjeta se actualizó con exito!','Tarjeta Actualizada')
        this.obtenerTarjetas()
      }, error=>{
        console.log(error);
        this.toastr.error('ups ha ocurrido un error'+error.message, 'Error')
        
      }
      )
    }
    
    
  }
  eliminar_tarjeta(id:number){
    this._tarjetaService.deleteTarjeta(id).subscribe(data=>{
          this.toastr.error('La tarjeta fue eliminada con exito', 'Tarjeta eliminada')
          this.obtenerTarjetas(); 
    },
    error=>{
      console.log(error);
      
    }
    )
    
  }
  editar_tarjeta(tarjeta:any){
    this.accion="editar"
    this.id=tarjeta.id
    console.log(tarjeta.numero_Tarjeta);
    
    this.form.patchValue({
      titular:tarjeta.titular,
      numero_Tarjeta:tarjeta.numero_Tarjeta,
      fecha_Expiracion:tarjeta.fecha_Expiracion,
      cvv:tarjeta.cvv
    }
    )
  }
}
