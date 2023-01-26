import React from "react";
import Product from "./Product";

const products = [
    { name: "parfum 1", price: "50", currency: "euro" },
    { name: "parfum 2", price: "27", currency: "euro" },
    { name: "parfum 3", price: "98", currency: "dollar" },
    { name: "parfum 4", price: "57", currency: "euro" },
    { name: "parfum 5", price: "236", currency: "dollar" },
    { name: "parfum 6", price: "87", currency: "euro" },
    { name: "parfum 7", price: "29", currency: "euro" },
    { name: "parfum 8", price: "268", currency: "euro" },
    { name: "parfum 9", price: "589", currency: "dinar" },
    { name: "parfum 10", price: "34", currency: "euro" },
    { name: "parfum 11", price: "84", currency: "euro" },
    { name: "parfum 12", price: "103", currency: "euro" },
    { name: "parfum 13", price: "390", currency: "dinar" },
    { name: "parfum 14", price: "132", currency: "euro" },
    { name: "parfum 15", price: "125", currency: "dollar" },
    { name: "parfum 16", price: "63", currency: "dollar" }
]

export default function ProductSelection(props: { addToPrice: (name: string, price: number, currency: string) => void }) {
    const { addToPrice } = props;

    return (
        <div className={"grid grid-cols-4 grid-rows-4"}>
            {products.map((product) => {
                return (
                    <Product addToPrice={addToPrice}
                             name={product.name}
                             price={product.price}
                             currency={product.currency} />
                );
            })}
        </div>
    );
};
