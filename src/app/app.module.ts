import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { idgsComponet } from './Ull/idgs.component';
import { IevnComponent } from './Ull/ievn/ievn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SumaComponent } from './Ull/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasBasModule } from './Ull/formularios/operas-bas/operas-bas.module';
import { MenuComponent } from './Ull/menu/menu.component';
import { AlumnosFilterPipe } from './Ull/alumnos-filter.pipe';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component';
import { AppRoutingModule } from './app.routing.module';




@NgModule({
  declarations: [
    AppComponent,
    idgsComponet,
    IevnComponent,
    SumaComponent,
    MenuComponent,
    AlumnosFilterPipe,
    AlumnoReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasBasModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
