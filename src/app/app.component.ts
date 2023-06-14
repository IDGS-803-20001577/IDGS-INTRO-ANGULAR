import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template:'./app.app-root',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'intro-angular-idgs903';

  grupo='IDGS903';

  alumnos={
    matricula:1234,
    nombre:'Juan',
    fechaNacimiento:new Date(),
    pago:123.56
  }

  duplicarN(valor:number):number{
    return valor*2;
  }
}
