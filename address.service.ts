import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ApiConfig } from './api-config.interface';
import { API_CONFIG } from './api-config.token';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  apiUrl!: string;

  constructor(@Inject(API_CONFIG) apiConfig: ApiConfig, private httpClient: HttpClient) {
    this.apiUrl = apiConfig.apiUrl;
  }

  get() {

    // local http://localhost:5000
    // staging/testing test.mockapi.io
    // production productin.mockapi.io
    return this.httpClient.get(`${this.apiUrl}/api/address`);
  }
}
