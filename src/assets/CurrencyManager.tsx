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

    public getCurrencyNames(price: number, currency: string): string[] {
        const decomposition : string[] = [];
        let cutting : number[] = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];
        switch (currency) {
            case "euro":
                cutting = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
                break;
            case "dollar":
                cutting = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];
                break;
            case "dinar":
                cutting = [50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05];
                break;
        }
    
        for (const c of cutting) {
            const nb = Math.floor(price / c);
          
            for (let i = 0; i < nb; i++) {
                decomposition.push(c.toString());
            }
    
            price -= nb * c;
            // used to round typescript imprecision
            price = Math.round((price + Number.EPSILON) * 100) / 100;
        }
    
        return decomposition;
    }

};