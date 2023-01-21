import React from "react";

export default function Currency(props: { currency: string, selectCurrency: (currency: string) => void }) {
    const { currency, selectCurrency } = props;

    const changeCurrency = async () => {
        selectCurrency(currency);
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        };
        await fetch('http://localhost:3001/', requestOptions)
            .then(response => console.log(response));
    }

    return (
        <div className={"w-[5vw] mx-5 transition duration-300 hover:text-zinc-200 text-xl text-center border"} onClick={changeCurrency}>
            {currency}
        </div>
    );
};
