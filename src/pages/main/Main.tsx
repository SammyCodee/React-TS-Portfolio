import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Main = () => {
    const userData = useAppSelector((state) => state.user.user);
    const getUsername = userData.username;
    const getPassword = userData.password;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));

    return (
        <Box
            sx={{
                width: 300,
                height: 300,
                backgroundColor: "white",
            }}
        >
            <Stack spacing={2}>
                <Item>
                    <span>Username: {getUsername}</span>
                    <span>Password: {getPassword}</span>
                </Item>
            </Stack>
        </Box>
    );
};

export default Main;
