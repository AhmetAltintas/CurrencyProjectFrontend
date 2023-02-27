import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Currency } from 'src/app/models/entities/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit{
  
  currencies: Currency[] = [];
  constructor(
    private currencyService:CurrencyService,
    private activatedRoute:ActivatedRoute,
    private datePipe:DatePipe
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params['date']) {
        this.getAllByDate(params['date']);
      }
      else {
        this.getAllToday();
      }
    })
  }

  getAllByDate(date:Date) {
    this.currencyService.getAllByDate(date).subscribe(response=>{
      this.currencies = response.data
    })
  }

  getAllToday() {
    //let today = new Date("2015-08-10")
    let today = new Date(Date.now()).setHours(3,0,0,0);
    this.currencyService.getAllByDate(new Date(today)).subscribe(response=> {
      this.currencies = response.data
    })
  }
}
