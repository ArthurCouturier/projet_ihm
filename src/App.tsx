import React, {useState} from 'react';
import './App.css';
import CurrencySelection from "./Components/CurrencySelection";
import ProductSelection from "./Components/ProductSelection";

function App() {
    const [totalPriceDollar, setTotalPriceDollar] = useState(0);

    function addToPrice(price: number) {
        setTotalPriceDollar(totalPriceDollar + price);
    }

    return (
        <div className="h-[100vh] w-[100vw] flex-grow bg-slate-800 text-zinc-400">
            <div className="h-[66vh] text-center">
                <ProductSelection  addToPrice={addToPrice} />
            </div>
            <div className={"h-[33vh] text-center"}>
                <CurrencySelection desc={`Total: ${totalPriceDollar} Devise du prix: `} />
                <CurrencySelection desc={"Devise de paiement: "} />
                <CurrencySelection desc={"Devise de rendu: "} />
            </div>
        </div>
    );
}

export default App;
