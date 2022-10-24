import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NasaImages } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getImages(params: NasaImages): Observable<any> {
    return this.http.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${params.rover}/photos?sol=${params.sol}&page=${params.page}&camera=${params.camera}&api_key=03iiV9FySIcWq583GJ6mG0pMpjpLcAzbHIB5sDu9`
    );
  }
}
