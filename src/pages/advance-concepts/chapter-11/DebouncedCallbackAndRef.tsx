import useDebounce from "pages/advance-concepts/chapter-11/useDebounce";
import { useState } from "react";
import { type debounceType } from "pages/advance-concepts/chapter-11/types";

const DebouncedCallbackAndRef = () => {
    const [value, setValue] = useState<string>("initial");

    const onChange = () => {
        console.log("State value:", value);
    };

    const debouncedOnChange = useDebounce(onChange);

    return (
        <input
            type="text"
            onChange={(e) => {
                debouncedOnChange();
                setValue(e.target.value);
            }}
            value={value}
        />
    );
};

export default DebouncedCallbackAndRef;
