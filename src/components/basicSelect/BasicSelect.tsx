import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { ISelectProps, Base } from "./types";

const BasicSelect = <TValue extends Base>({
    values,
    onChange,
    label,
    selected,
    required,
    titleKey = "value",
}: ISelectProps<TValue>) => {
    const handleChange = (e: SelectChangeEvent) => {
        const val = values.find((val) => val.id === e.target.value);
        if (val) onChange(val);
    };
    return (
        <FormControl required={required}>
            <Select label={label} onChange={handleChange} value={selected}>
                {values &&
                    values.map((data) => (
                        <MenuItem
                            key={`${data.value} - ${data.id}`}
                            value={data.id}
                        >
                            {`${data[titleKey]}`}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    );
};

export default BasicSelect;
