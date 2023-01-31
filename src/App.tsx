import React, {useState} from 'react';
import './App.css';
import CurrencySelection from "./Components/CurrencySelection";
import ProductSelection from "./Components/ProductSelection";
import CurrencyManager from "./assets/CurrencyManager";
const manager = new CurrencyManager();

function App() {
    const [totalPriceDollar, setTotalPriceDollar] = useState(0);
    const [paid, setPaid] = useState(0);
    const [inCurrency, setInCurrency] = useState("dollar");
    const [outCurrency, setOutCurrency] = useState("dollar");

    const sendToWhiteboard = async (body: string) => {
        const requestOptions = {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
        await fetch('http://localhost:3001/majWhiteboard', requestOptions);
    }

    const changeInCurrency = async (currency: string) => {
        setInCurrency(currency);
        const priceToShow = manager.passPriceFromDollar(totalPriceDollar, currency);
        const hasToReturn = manager.passPriceFromDollar(manager.passPriceToDollar(paid, outCurrency) - totalPriceDollar, outCurrency);
        const body = JSON.stringify({
            totalPrice: priceToShow,
            hasToReturn: hasToReturn,
            inCurrency: currency,
            outCurrency: outCurrency,
            product: false,
            reset: false,
        });
        await sendToWhiteboard(body);
    }

    const changeOutCurrency = async (currency: string) => {
        setOutCurrency(currency);
        const priceToShow = manager.passPriceFromDollar(totalPriceDollar, inCurrency);
        const hasToReturn = manager.passPriceFromDollar(manager.passPriceToDollar(paid, currency) - totalPriceDollar, currency);
        const body = JSON.stringify({
            totalPrice: priceToShow,
            hasToReturn: hasToReturn,
            inCurrency: inCurrency,
            outCurrency: currency,
            product: false,
            reset: false,
        });
        await sendToWhiteboard(body);
    }

    async function addToPrice(name: string, price: number, currency: string) {
        const newPrice = totalPriceDollar + manager.passPriceToDollar(price, currency);
        const hasToReturn = manager.passPriceFromDollar(manager.passPriceToDollar(paid, currency) - totalPriceDollar, currency);
        setTotalPriceDollar(newPrice);
        const body = JSON.stringify({
            totalPrice: newPrice,
            hasToReturn: hasToReturn,
            inCurrency: inCurrency,
            outCurrency: currency,
            product: name,
            reset: false,
        });
        await sendToWhiteboard(body);
    }

    async function reset() {
        setTotalPriceDollar(0);
        setPaid(0);
        setInCurrency("dollar");
        setOutCurrency("dollar");
        const body = JSON.stringify({
            totalPrice: totalPriceDollar,
            hasToReturn: totalPriceDollar - paid,
            inCurrency: inCurrency,
            outCurrency: outCurrency,
            product: false,
            reset: true,
        });
        await sendToWhiteboard(body);
    }

    async function displayRender() {
        const hasToReturn = manager.passPriceFromDollar(manager.passPriceToDollar(paid, outCurrency) - totalPriceDollar, outCurrency);
        const listOfUrl: string[] = manager.getCurrencyNames(hasToReturn);
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                listOfUrl: listOfUrl,
                currency: outCurrency,
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
        await fetch('http://localhost:3001/finish', requestOptions);
    }

    return (
        <div className="h-[100vh] w-[100vw] flex-grow bg-slate-800 text-zinc-400">
            <div className="h-[66vh] text-center">
                <ProductSelection  addToPrice={addToPrice} />
            </div>
            <div className={"h-[22vh] text-center"}>
                <CurrencySelection desc={`Total: ${manager.passPriceFromDollar(totalPriceDollar, inCurrency)} `} currency={inCurrency} changeCurrency={changeInCurrency} />
                <div>
                    A payé: <input value={paid} onChange={e => setPaid(Number(e.target.value))}/>
                </div>
                <CurrencySelection desc={`Devise de rendu: `} currency={outCurrency} changeCurrency={changeOutCurrency} />
            </div>
            <div className={"h-[11vh] text-center"}>
                <div className={"mx-auto my-2 border rounded-full w-[15vw] transition duration-300 hover:scale-110 hover:cursor-pointer"} onClick={reset}>
                    Reset
                </div>
                <div className={"mx-auto my-2 border rounded-full w-[15vw] transition duration-300 hover:scale-110 hover:cursor-pointer"} onClick={displayRender}>
                    Finish
                </div>
            </div>
        </div>
    );
}

export default App;
