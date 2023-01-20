import React from "react";

export default function Currency(props: { currency: string, selectCurrency: (currency: string) => void }) {
    const { currency, selectCurrency } = props;

    const changeCurrency = () => {
        selectCurrency(currency);
    }

    return (
        <div className={"mx-5"} onClick={changeCurrency}>
            Currency {currency}
        </div>
    );
};
