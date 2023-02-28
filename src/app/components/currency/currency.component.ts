import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/entities/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit{
  
  currencies: Currency[] = [];
  selectedDate: string;

  constructor(
    private currencyService:CurrencyService,

  ){}

  ngOnInit(): void {
    this.getAllToday();
  }

  getAllToday() {
    //let today = new Date("2015-08-10")
    let today = new Date(Date.now()).setHours(3,0,0,0);
    this.currencyService.getAllByDate(new Date(today)).subscribe(response=> {
      this.currencies = response.data
    })
  }

  getAllByDate() {
    let date = new Date(this.selectedDate).setHours(3,0,0,0);
    this.currencyService.getAllByDate(new Date(date)).subscribe(response=> {
      this.currencies = response.data
    })
  }

  reload(){
    window.location.reload();
  }
}
