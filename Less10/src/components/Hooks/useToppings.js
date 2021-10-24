import { useState } from "react";

const getTopping = toppings => toppings.map(item => {
    if (!item.name) {
        return {name: item, checked: false}
    } 
    return item;
})

export function useToppings(openItem) {

    const readyTopping = openItem.toppings ? getTopping(openItem.toppings) : '';
    const [toppings, setToppings] = useState(readyTopping);

    const checkToppings = (index) => {
        const newToppings = toppings.map((item, i) => {
            const newItem = {...item}
            if (i === index) {
                newItem.checked = !newItem.checked;
            }
            return newItem;
        })
        setToppings(newToppings);
    }
    return { toppings, checkToppings }
}