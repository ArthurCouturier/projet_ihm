import React, {useState} from "react";
import Currency from "./Currency";

const currencies = [
    { name: "dollar" },
    { name: "euro" },
    { name: "dinar" },
];

export default function CurrencySelection(props: { desc: string }) {
    const { desc } = props;

    const [currency, setCurrency] = useState("dollar");
    // const [price, setPrice] = useState(0);
    // const [paid, setPaid] = useState(0);

    return (
        <div className={"h-[11vh]"}>
            <div>
                {desc}{currency}
            </div>
            <div className={"flex"}>
                {currencies.map((currency) => {
                    return (
                        <Currency currency={currency.name} selectCurrency={setCurrency} />
                    );
                })}
            </div>
        </div>
    );
};
