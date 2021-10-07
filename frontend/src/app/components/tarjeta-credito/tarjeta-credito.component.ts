import { Component, OnInit } from '@angular/core';

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
      titulo:'alberto',
      numero_tarjeta:'342424334234',
      fecha_expiracion:'12/23',
      cvv:'345' 
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
