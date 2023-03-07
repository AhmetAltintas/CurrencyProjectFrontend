import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/entities/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css'],
})
export class CalculationComponent implements OnInit {
  amount: number;
  fromCurrency: number;
  toCurrency: number;
  result: number;

  currencies: Currency[];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe((currencies)=> {
      this.currencies = currencies;
      this.currencies.push(newCurrency)
      console.log(currencies[0].currencyDate)
    })
  }


  calculate(amount: number, fromCurrency: number, toCurrency: number) {
    var result = amount * (fromCurrency / toCurrency);
    return result;
  }
}



const newCurrency: Currency = {
  id: 1,
  currencyName: 'TURK LIRASI',
  forexBuying: 1,
  forexSelling: 1,
  banknoteBuying: 1,
  banknoteSelling: 1,
  crossRateUSD: 1,
  currencyDate: new Date(),
};