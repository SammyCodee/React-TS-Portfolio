import {ComponentProps} from "react";
import Button from "@mui/material/Button";

interface BasicButtonTypes {
    label: string;
    eventHandler: React.MouseEventHandler<HTMLButtonElement>
} 

/**
 * Get the props of a component from external library
 * Reference: https://www.totaltypescript.com/react-component-props-type-helper
 */
export type BasicButtonProps = ComponentProps<typeof Button> & BasicButtonTypes
