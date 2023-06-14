import { Component } from '@angular/core';

@Component({
  selector: 'app-ievn',
  templateUrl: './ievn.component.html',
  styleUrls: ['./ievn.component.css']
})
export class IevnComponent {
 alumnos:any[]=[
    {
      "matricula":1534,
      "nombre":"Dario",
      "edad":22,
      "correo":"dario@bros.com",
      "pago":2599.12,
      "foto":"data:image/jpeg;base64,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"
    },
    {
      "matricula":4353,
      "nombre":"Ana",
      "edad":20,
      "correo":"ana@bros.com",
      "pago":2599.12,
      "foto":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLBLTq0az43aOmlPnyIEgmOi55WusutipFSw&usqp=CAU"
    }
  ]

}