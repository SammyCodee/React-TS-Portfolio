import TextField from "@mui/material/TextField";
import { InputFieldType } from "./types";

const InputField = (props: InputFieldType) => {
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
        />
    );
};

export default InputField;
