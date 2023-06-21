import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { idgsComponet } from './Ull/idgs.component';
import { IevnComponent } from './Ull/ievn/ievn.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './Ull/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasBasModule } from './Ull/formularios/operas-bas/operas-bas.module';




@NgModule({
  declarations: [
    AppComponent,
    idgsComponet,
    IevnComponent,
    SumaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasBasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
