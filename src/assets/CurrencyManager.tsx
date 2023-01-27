export default class CurrencyManager {
    constructor() {
    }


    public passPriceToDollar(price: number = 0, currency: string = "dollar"): number {
        switch (currency) {
            case "euro":
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

    // public getCurrencyNames(price: number): string[] {
    //     const currencyNames = [100,20,10,5,2,1];
    //     const correspondingNames = [];
    //     let remainingPrice = price;
    //
    //     for (const name of currencyNames) {
    //         const divisor = parseInt(name);
    //         while (remainingPrice >= divisor) {
    //             remainingPrice -= divisor;
    //             correspondingNames.push(name);
    //         }
    //     }
    //     return correspondingNames;
    // }
    // const price = 376;
    // const decomposition = [
    //     "100",
    //     "100",
    //     "cent",
    //     "cinquante",
    //     "vingt",
    //     "cinq",
    //     "un"
    // ]
};