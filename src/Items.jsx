import React from "react";
import { useDispatch } from "react-redux";

export default function Items() {
    const dispatch = useDispatch();

    function addItem() {
        dispatch({ type: "ADD_ITEM" });
    }

    function removeItem() {
        dispatch({ type: "REMOVE_ITEM" });
    }

    return (
        <div>
            <h1>This is items component</h1>
            <button onClick={addItem}>ADD ITEM</button>
            <button onClick={removeItem}>REMOVE ITEM</button>
        </div>
    );
}
