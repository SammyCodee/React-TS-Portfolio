/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import Button from "@mui/material/Button";
import { type BasicButtonProps } from "./types";

const BasicButton = ({ label, eventHandler, ...props }: BasicButtonProps) => {
    return (
        <Button onClick={eventHandler} color="primary">
            {label}
        </Button>
    );
};

const MemoizedBasicButton = React.memo(BasicButton, (prevProps, nextProps) => {
    if (prevProps.label === nextProps.label) {
        return true; /** props are equal */
    }
    return false; /** props are not equal -> update the component */
}) as typeof BasicButton;

export default MemoizedBasicButton;
