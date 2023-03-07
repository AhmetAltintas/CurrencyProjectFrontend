import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Currency } from 'src/app/models/entities/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
  inputs: ['currentCurrencies'],
})
export class CurrencyComponent implements OnInit {
  currencies: Currency[];
  currentDate: Date;
  dateFormGroup: FormGroup;

  constructor(
    private currencyService: CurrencyService,
    private formBuilder: FormBuilder
  ) {}

  async ngOnInit(): Promise<void> {
    this.createDateFormGroup();
    await this.getAllByDate();
  }

  createDateFormGroup() {
    this.dateFormGroup = this.formBuilder.group({
      currentDate: ['', Validators.required],
    });
  }

  async getAllByDate() {
    let date;
    if (this.currentDate == null) {
      date = new Date(Date.now()).setHours(3, 0, 0, 0);
    } else {
      date = this.currentDate.setHours(3, 0, 0, 0);
    }
    this.currencyService.getAllByDate(new Date(date)).subscribe((res) => {
      this.currencies = res.data;
      this.currencyService.setCurrencies(this.currencies)
    });
  }

  setCurrentDate() {
    this.currentDate = new Date(this.dateFormGroup.value.currentDate);
    this.getAllByDate();
  }

  reload() {
    window.location.reload();
  }
}
