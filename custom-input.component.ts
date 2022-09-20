import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {
  clickedValue!: string;
  constructor() { }

  ngOnInit(): void {
  }

  getValue(value: string): void {
    console.log(value);
    this.clickedValue = value;
  }

}
