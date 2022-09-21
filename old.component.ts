import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AddressService } from '../address.service';
import { API_CONFIG } from '../api-config.token';

@Component({
  selector: 'app-old',
  templateUrl: './old.component.html',
  styleUrls: ['./old.component.css'],
  providers: [
    AddressService,
    {
      provide: API_CONFIG,
      useValue: {apiUrl: "https://632a09d44c626ff832d031cc.mockapi.io"}
    }
  ]
})
export class OldComponent implements OnInit {

  constructor(private addressService: AddressService) { }

  async ngOnInit() {
    const response = await lastValueFrom(this.addressService.get());
    console.log(response);
  }

}
