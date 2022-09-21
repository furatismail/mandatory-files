import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { API_CONFIG } from './api-config.token';
import { OldComponent } from './old/old.component';

@NgModule({
  declarations: [
    AppComponent,
    OldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: API_CONFIG,
      useFactory: () => {
        const userLang = navigator.language;
        console.log(userLang);
        if(userLang === 'en') {
          return {apiUrl: 'http://api1.cz'};
        } else {
          return {apiUrl: 'http://api2.cz'};
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
