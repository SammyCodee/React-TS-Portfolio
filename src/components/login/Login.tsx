import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
    tryLogin,
    loginSuccess,
    loginFailed,
} from "../../redux/user/userSlice";
import { user } from "./types";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useAppDispatch();

    const handleUsername = (data: React.ChangeEvent<HTMLInputElement>) => {
        data.preventDefault();
        setUsername(data.target.value);
    };

    const handlePassword = (data: React.ChangeEvent<HTMLInputElement>) => {
        data.preventDefault();
        setPassword(data.target.value);
    };

    const userPaylod: user = {
        user: {
            username: username,
            password: password,
        },
        isSuccess: false,
    };
    const handleSubmit = (
        data: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        data.preventDefault();
        try {
            dispatch(tryLogin(userPaylod));
            dispatch(loginSuccess());
        } catch (err) {
            dispatch(loginFailed());
        }
    };

    return (
        <>
            <form>
                <div>Login</div>

                <label>
                    Username
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => handleUsername(e)}
                    />
                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => handlePassword(e)}
                    />
                </label>

                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </>
    );
};

export default Login;
