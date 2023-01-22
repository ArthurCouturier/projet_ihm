import React from "react";

export default function Product(props: { addToPrice: (price: number) => void, name: string, price: string, currency: string }) {
    const { addToPrice, name, price, currency } = props;

    function addPrice() {
        // TODO: we have to convert to dollar. Maybe we have to do it in a specific typescript module imported
        addToPrice(Number(price));
    }

    return (
        <div className={"w-[12vw] h-[12vh] border"} onClick={addPrice}>
            <div> {name} </div>
            <div> {price} </div>
            <div> {currency} </div>
        </div>
    );
};
