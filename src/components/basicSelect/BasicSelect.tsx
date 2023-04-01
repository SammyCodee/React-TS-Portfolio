import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { ISelectProps, Base } from "./types";

const BasicSelect = <TValue extends Base>({
    values = [],
    onChange,
    label = "",
    selected = "",
    required,
    displayLabel,
}: ISelectProps<TValue>) => {
    //type guard
    const getStringFromValue = <TValue extends Base>(value: TValue) => {
        if (typeof value === "string") {
            return value;
        }
        return value.id;
    };

    const handleChange = (e: SelectChangeEvent) => {
        const val = values.find(
            (val) => getStringFromValue(val) === e.target.value
        );
        if (val) onChange(val);
    };

    console.log("basic select render invoked!");
    return (
        <FormControl required={required}>
            <Select label={label} onChange={handleChange} value={selected}>
                {values &&
                    values.map((data) => (
                        <MenuItem
                            key={getStringFromValue(data)}
                            value={getStringFromValue(data)}
                        >
                            {displayLabel(data)}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    );
};

const MemoizedBasicSelect = React.memo(BasicSelect, (prevProps, nextProps) => {
    if (prevProps.selected === nextProps.selected) {
        return true;
    }
    return false;
}) as typeof BasicSelect;

export default MemoizedBasicSelect;
