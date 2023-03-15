import Button from "@mui/material/Button";
import { BasicButtonTypes } from "./types";

const BasicButton = (props: BasicButtonTypes) => {
    const { label, eventHandler } = props;
    return (
        <Button onClick={eventHandler} color="primary">
            {label}
        </Button>
    );
};

export default BasicButton;
