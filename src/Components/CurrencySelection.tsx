import React from "react";

export default function CurrencySelection(props: { number: string }) {
    const { number } = props;

    return (
        <div className={"h-[11vh]"}>
            Devise {number}
        </div>
    );
};
