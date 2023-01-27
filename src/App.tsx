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
    const changeInCurrency = async (currency: string) => {
        setInCurrency(currency);
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                totalPriceDollar: totalPriceDollar,
                currency: currency
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
        await fetch('http://localhost:3001/changeInCurrency', requestOptions);
    }
    const [outCurrency, setOutCurrency] = useState("dollar");
    const changeOutCurrency = async (currency: string) => {
        setInCurrency(currency);
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({currency: currency}),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
        await fetch('http://localhost:3001/changeOutCurrency', requestOptions);
    }

    async function addToPrice(name: string, price: number, currency: string) {
        const newPrice = totalPriceDollar + manager.passPriceToDollar(price, currency);
        setTotalPriceDollar(newPrice);
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                'totalPriceDollar': newPrice,
                'name': name
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        };
        // @ts-ignore
        await fetch('http://localhost:3001/newProduct', requestOptions)
            .then(function(response) { return response.json(); })
            .then(function(myJson) { console.log(myJson); });
    }

    async function reset() {
        setTotalPriceDollar(0);
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
        };
        // @ts-ignore
        await fetch('http://localhost:3001/reset', requestOptions)
            .then(function(response) { return response.json(); })
            .then(function(myJson) { console.log(myJson); });
    }

    return (
        <div className="h-[100vh] w-[100vw] flex-grow bg-slate-800 text-zinc-400">
            <div className="h-[66vh] text-center">
                <ProductSelection  addToPrice={addToPrice} />
            </div>
            <div className={"h-[22vh] text-center"}>
                <CurrencySelection desc={`Total: ${totalPriceDollar} Devise du prix: `} currency={inCurrency} changeCurrency={changeInCurrency} />
                <div>
                    A payé:   <input value={paid} onChange={e => setPaid(Number(e.target.value))}/>
                </div>
                <CurrencySelection desc={`Devise de rendu: `} currency={outCurrency} changeCurrency={changeOutCurrency} />
            </div>
            <div className={"h-[11vh] text-center"}>
                <div className={"mx-auto border rounded-full w-[15vw] transition duration-300 hover:scale-110 hover:cursor-pointer"} onClick={reset}>
                    Reset
                </div>
            </div>
        </div>
    );
}

export default App;
