import { useState, useRef } from "react";
import { ApiType } from "pages/advance-concepts/chapter-9/types";
import InputWithImperativeHandle from "pages/advance-concepts/chapter-9/InputWithImperativeHandle";

const Form = () => {
    const [name, setName] = useState<string>("");
    const inputApiRef = useRef<ApiType>({} as ApiType);

    const onSubmitClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        if (!name) {
            inputApiRef.current?.focus();
            inputApiRef.current?.shake();
            console.log("Input should be focused and shaken if empty!");
        } else console.log("Submit the name here!", name);
    };

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    return (
        <form>
            <label>Name Input with Imperative Handle</label>
            <br />
            <InputWithImperativeHandle
                onChange={handleName}
                apiRef={inputApiRef}
            />
            <button onClick={(e) => onSubmitClick(e)}>Submit</button>
        </form>
    );
};

export default Form;
