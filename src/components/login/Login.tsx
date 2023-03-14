import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login } from "../../redux/user/userSlice";
import loginTypes from "./types";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const getUsername = useAppSelector((state) => state.user.username);
    const getPassword = useAppSelector((state) => state.user.password);

    const dispatch = useAppDispatch();
    const handleUsername = (data: React.ChangeEvent<HTMLInputElement>) => {
        data.preventDefault();
        setUsername(data.target.value);
    };

    const handlePassword = (data: React.ChangeEvent<HTMLInputElement>) => {
        data.preventDefault();
        setPassword(data.target.value);
    };

    const handleSubmit = (
        data: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        data.preventDefault();
        dispatch(login({ username, password }));
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

            <span>Username: {getUsername}</span>
            <span>Password: {getPassword}</span>
        </>
    );
};

export default Login;
