import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-fundamentals'
  obj = {
    klic1: "hodnota1",
    klic2: "hodnota2"
  }
  details = ["1", "2", "3"]

  constructor() {
    console.log('Hello')
  }
}
