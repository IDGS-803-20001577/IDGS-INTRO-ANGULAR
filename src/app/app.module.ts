import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { idgsComponet } from './Ull/idgs.component';
import { IevnComponent } from './Ull/ievn/ievn.component';

@NgModule({
  declarations: [
    AppComponent,
    idgsComponet,
    IevnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
