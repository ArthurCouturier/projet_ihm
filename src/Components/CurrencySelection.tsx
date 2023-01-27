import React, {useState} from "react";
import Currency from "./Currency";

const currencies = [
    { name: "dollar" },
    { name: "euro" },
    { name: "dinar" },
];

export default function CurrencySelection(props: { desc: string, currency: string, changeCurrency: (currency: string) => void }) {
    const { desc, currency, changeCurrency } = props;


    // const [price, setPrice] = useState(0);
    // const [paid, setPaid] = useState(0);

    return (
        <div className={"h-[8vh]"}>
            <div>
                {desc}{currency}
            </div>
            <div className={"flex"}>
                {currencies.map((currency) => {
                    return (
                        <Currency currency={currency.name} selectCurrency={changeCurrency} />
                    );
                })}
            </div>
        </div>
    );
};
