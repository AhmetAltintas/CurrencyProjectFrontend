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
  result: number | null

  currencies: Currency[];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe((currencies)=> {
      this.currencies = currencies;
      this.currencies.push(newCurrency)
    })
  }


  calculate() {
    if (this.amount && this.fromCurrency && this.toCurrency) {
      const fromCurrencyRate = this.fromCurrency / 1; // get the rate of the selected fromCurrency
      const toCurrencyRate = this.toCurrency / 1; // get the rate of the selected toCurrency
      const convertedAmount = this.amount * (fromCurrencyRate / toCurrencyRate); // calculate the converted amount
      this.result = convertedAmount; // set the result value to the converted amount
    } else {
      this.result = null; // if any of the input values are not available, set the result to null
    }
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