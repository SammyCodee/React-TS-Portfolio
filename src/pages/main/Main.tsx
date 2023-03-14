import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Main = () => {
    const userData = useAppSelector((state) => state.user.user);
    const getUsername = userData.username;
    const getPassword = userData.password;
    return (
        <Box
            sx={{
                backgroundColor: "white",
            }}
        >
            <Stack spacing={2}>
                <span>Username: {getUsername}</span>
                <span>Password: {getPassword}</span>
            </Stack>
        </Box>
    );
};

export default Main;
