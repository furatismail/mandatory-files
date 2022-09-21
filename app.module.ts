import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { API_CONFIG } from './api-config.token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: API_CONFIG,
      useValue: {apiUrl: environment.apiUrl}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
