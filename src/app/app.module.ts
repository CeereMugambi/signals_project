import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from '../home/home/home.module';
import { SignalService } from '../services/signal.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    SignalService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
