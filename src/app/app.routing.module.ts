import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { IevnComponent } from "./Ull/ievn/ievn.component";
import { AlumnoReactiveComponent } from "./formularios/alumno-reactive/alumno-reactive.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'IEVN', component: IevnComponent },
    { path: 'Formulario', component: AlumnoReactiveComponent },
 /*   {path:'IEVN', component:PagenotfoundComponent}, */

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }