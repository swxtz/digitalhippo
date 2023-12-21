export interface IFormatPrice {
    price: number | null;
    options: {
        currency?: "USD" | "EUR" | "GBP" | "BDT" | "BRL",
        notation?: Intl.NumberFormatOptions["notation"]
    } 
}
