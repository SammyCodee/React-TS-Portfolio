import TextField from "@mui/material/TextField";
import { InputFieldType } from "./types";
import { forwardRef, ForwardedRef } from "react";

const InputFieldWithRef = (
    props: InputFieldType,
    ref?: ForwardedRef<HTMLInputElement>
) => {
    const { label, type, required, value, eventHandler } = props;
    return (
        <TextField
            required={required}
            label={label}
            variant={"outlined"}
            type={type}
            value={value}
            onChange={eventHandler}
            color="primary"
            ref={ref}
        />
    );
};

const InputField = forwardRef(InputFieldWithRef);
export default InputField;
