import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatImagesService {

  baseUrl: string = 'https://api.thecatapi.com/v1/images/search'

  constructor(private http: HttpClient) { }

  getImages(limit: number): Observable<any> {
    const url = this.baseUrl + '?limit=' + limit;
    return this.http.get(url);
  }

}
