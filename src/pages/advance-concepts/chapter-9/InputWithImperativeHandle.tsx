import {
    MutableRefObject,
    useState,
    useRef,
    useImperativeHandle,
    useEffect,
} from "react";
import { ApiType } from "pages/advance-concepts/chapter-9/types";
import styles from "./styles.module.css";

type InputFieldProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * So the apiRef must have focus() and shake() functions based on ApiType
     */
    apiRef: MutableRefObject<ApiType>;
};

const InputWithImperativeHandle = ({ onChange, apiRef }: InputFieldProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [shouldShake, setShouldShake] = useState(false);
    useImperativeHandle(
        apiRef,
        () => ({
            focus: () => {
                inputRef.current?.focus();
            },
            shake: () => {
                setShouldShake(true);
            },
        }),

        []
    );

    /**
     * Method 2: cleaner way
     */
    // useEffect(() => {
    //     if (apiRef) {
    //         apiRef.current = {
    //             focus: () => {
    //                 inputRef.current?.focus();
    //             },
    //             shake: () => {
    //                 setShouldShake(true);
    //             },
    //         };
    //     }
    // }, [apiRef]);

    const className = shouldShake ? styles.shake : "";
    return (
        <input
            ref={inputRef}
            type="text"
            onChange={onChange}
            className={className}
            onAnimationEnd={() => {
                setShouldShake(false);
            }}
        />
    );
};

export default InputWithImperativeHandle;
