/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useRef, useState } from "react";
import Container from "@mui/material/Container";
import { InputField } from "components/inputField";
import Form from "pages/advance-concepts/chapter-9/Form";

const ChapterNine = () => {
    /**
     * Passing inputRef from parent to child required forwardRef
     * InputField needs to add forwardRef in this case
     */
    const inputRef = useRef<HTMLInputElement>(null);

    /**
     * Ref will store the value even the component is re-rendering
     * Ref update will not trigger re-render
     */
    const testRef = useRef({ id: "test" });
    useEffect(() => {
        console.log("testRef: ", testRef.current.id);
    });

    const [textInput, setTextInput] = useState<string>("");
    const [username, setUsername] = useState<string>("");

    useEffect(() => {
        console.log("ref current: ", inputRef.current);
    }, [textInput]);

    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput(e.target.value);
    };

    const handleUsername = (data: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(data.target.value);
    };

    const submitForm = () => {
        if (!textInput) {
            inputRef.current?.focus();
        } else {
            console.log("submitted value: ", textInput);
        }
    };
    console.log("chapter 9 rerender!!!!");
    return (
        <Container>
            <h1>Chapter 9. Refs: from storing data to imperative API</h1>
            <input
                ref={inputRef}
                value={textInput}
                onChange={handleTextInput}
            />

            <InputField
                label={"Username"}
                type={""}
                required={true}
                value={username}
                eventHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleUsername(e);
                }}
                ref={inputRef}
            />
            <button onClick={submitForm}>submit</button>

            <br />
            <h1>Form example</h1>
            <p>Click submit and see how "name" field focuses!</p>
            <Form />
        </Container>
    );
};

export default ChapterNine;
