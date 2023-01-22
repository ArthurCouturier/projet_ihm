import React from "react";
import Product from "./Product";

const products = [
    { name: "parfum 1", price: "50", currency: "euro" },
    { name: "parfum 2", price: "63", currency: "dollar" }
]

export default function ProductSelection(props: { addToPrice: (price: number) => void }) {
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
