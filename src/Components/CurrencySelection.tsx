import React, {useState} from "react";
import Currency from "./Currency";

const currencies = [
    { name: "dollar" },
    { name: "euro" },
];

export default function CurrencySelection(props: { number: string }) {
    const { number } = props;

    const [currency, setCurrency] = useState("dollar");

    return (
        <div className={"h-[11vh]"}>
            <div>
                {number}
                {currency}
            </div>
            <div className={"flex"}>
                {currencies.map((currency) => {
                    return (
                        <Currency currency={currency.name} selectCurrency={setCurrency} />
                    )
                })}
            </div>
        </div>
    );
};
