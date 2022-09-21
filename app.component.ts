import { Component, OnInit } from '@angular/core';
import { combineLatest, lastValueFrom } from 'rxjs';
import { AddressService } from './address.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-fundamentals-v';

  constructor(private addressService: AddressService) {

  }

  async ngOnInit() {
    const response = await lastValueFrom(this.addressService.get());
    console.log(response);
  }
}
