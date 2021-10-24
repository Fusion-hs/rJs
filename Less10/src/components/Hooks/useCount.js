import { useState } from "react";

export function useCount( number = 1 ) {
    const [count, setCount] = useState(number);

    const  onChange = (e) => {setCount(e.target.value)};

    return { count, setCount, onChange }
}