export default class CurrencyManager {
    constructor() {
    }


    public passPriceToDollar(price: number = 0, currency: string = "dollar"): number {
        switch (currency) {
            case "euro":
                console.log("price / 0.92", price / 0.92);
                return price / 0.92;
            case "dinar":
                return price / 3.125;
            default:
                return price;
        }
    }

    public passPriceFromDollar(price: number = 0, currency: string = "dollar"): number {
        switch (currency) {
            case "euro":
                return price * 0.92;
            case "dinar":
                return price * 3.125;
            default:
                return price;
        }
    }
};