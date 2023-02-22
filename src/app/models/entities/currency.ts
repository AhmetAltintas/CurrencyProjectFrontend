export interface Currency{
    id:number;
    currencyName:string;
    forexBuying:number;
    forexSelling:number;
    banknoteBuying:number;
    banknoteSelling:number;
    crossRateUSD:number;
    currencyDate:Date;
}