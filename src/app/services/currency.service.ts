import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../models/entities/currency';
import { ListResponseModel } from '../models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  url = "https://localhost:44384/api/Currency/"

  constructor(private httpClient: HttpClient) { }

  getAllByDate(date: Date): Observable<ListResponseModel<Currency>> {
    const formattedDate = date.toJSON();
    return this.httpClient.get<ListResponseModel<Currency>>(this.url + `GetAllByDate?date=` + formattedDate);
  }
}
