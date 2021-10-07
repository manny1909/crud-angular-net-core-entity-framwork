import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  lista_tarjetas: any[]=[
    {
      titular:'juan',
      numero_tarjeta:'342424334234',
      fecha_expiracion:'12/23',
      cvv:'345' 
    },
    {
      titular:'alberto',
      numero_tarjeta:'342424334234',
      fecha_expiracion:'12/23',
      cvv:'345' 
    }
  ]
  form:FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService) { 
    this.form=this.fb.group(
      {
        titular:['',[Validators.required,Validators.maxLength(45),Validators.minLength(5)]] ,
        numero_tarjeta:['',[Validators.required,Validators.maxLength(16),Validators.minLength(16)]],
        fecha_expiracion:['',[Validators.required,Validators.maxLength(5),Validators.minLength(5)]],
        cvv:['',[Validators.required,Validators.maxLength(3),Validators.minLength(3)]]
      }
    );
  }

  ngOnInit(): void {
  }
  agregar_tarjeta(){
    const tarjeta:any=
    {
      titular:this.form.get('titular')?.value,
      numero_tarjeta:this.form.get('numero_tarjeta')?.value,
      fecha_expiracion:this.form.get('fecha_expiracion')?.value,
      cvv:this.form.get('cvv')?.value,
    }
    this.lista_tarjetas.push(tarjeta)
    this.toastr.success('La tarjeta fue actualizada con exito!', 'Tarjeta registrada');
    this.form.reset();
    
  }
  eliminar_tarjeta(i:number){
    this.lista_tarjetas.splice(i,1);
    this.toastr.error('La tarjeta fue eliminada con exito', 'Tarjeta eliminada')
    
  }
}
