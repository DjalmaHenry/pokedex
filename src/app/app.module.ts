import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbStatusService } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NbStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
