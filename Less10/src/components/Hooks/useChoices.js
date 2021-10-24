import { useState } from "react";

export function useChoices(openItem) {

    //const readyChoices = openItem.toppings ? getTopping(openItem.toppings) : [];

    const [choice, setChoice] = useState('');

    function changeChoices(e) {
        setChoice(e.target.value);
    }

    return { choice, changeChoices }
}