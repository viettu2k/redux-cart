import React from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
    const cartData = useSelector((store) => store);

    return (
        <div>
            <h1>
                Navbar Component: Number of Items in Cart {cartData.cartCount}
            </h1>
        </div>
    );
}
