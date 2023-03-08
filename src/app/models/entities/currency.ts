export interface Currency{
    id:number;
    currencyCode:string;
    currencyName:string;
    forexBuying:number;
    forexSelling:number;
    banknoteBuying:number;
    banknoteSelling:number;
    crossRateUSD:number;
    currencyDate:Date;
    currencyImage:string;
}