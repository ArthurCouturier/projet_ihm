import React from "react";

export default function Product(props: { addToPrice: (name: string, price: number, currency: string) => void, name: string, price: string, currency: string }) {
    const { addToPrice, name, price, currency } = props;

    function addPrice() {
        // TODO: we have to convert to dollar. Maybe we have to do it in a specific typescript module imported
        addToPrice(name, Number(price), currency);
    }

    return (
        <div className={"w-[12vw] h-[12vh] border my-3 mx-3 transition duration-300 hover:scale-110 rounded-2xl hover:cursor-pointer"} onClick={addPrice}>
            <div> {name} </div>
            <div> {price} </div>
            <div> {currency} </div>
        </div>
    );
};
