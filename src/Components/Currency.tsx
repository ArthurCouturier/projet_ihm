import React from "react";

export default function Currency(props: { currency: string, selectCurrency: (currency: string) => void }) {
    const { currency, selectCurrency } = props;

    const changeCurrency = async () => {
        selectCurrency(currency);
    }

    return (
        <div className={"w-[5vw] mx-5 transition duration-300 text-xl text-center border hover:scale-110 rounded-xl hover:cursor-pointer"} onClick={changeCurrency}>
            {currency}
        </div>
    );
};
