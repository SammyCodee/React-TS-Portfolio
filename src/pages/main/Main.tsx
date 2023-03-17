import React, { FC, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { getPosts } from "../../redux/posts/postsSlice";
import style from "./Main.module.css";

const Main: FC = () => {
    const dispatch = useAppDispatch();

    const { user, isSuccess } = useAppSelector((state) => state.user);
    const getUsername = user.username;
    const getPassword = user.password;

    const { data, error, loading } = useAppSelector((state) => state.posts);
    console.log("data: ", data);
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <>
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

                {/* <Stack spacing={2}> */}

                {/* </Stack> */}
            </Box>

            {loading ? (
                <div>LOADING...</div>
            ) : (
                data &&
                data.map((post, index) => {
                    return (
                        <div key={`post-${index}`} className={style.container}>
                            <div>{post.id}</div>
                            <div>{post.userId}</div>
                            <div>{post.title}</div>
                            <div>{post.body}</div>
                        </div>
                    );
                })
            )}
        </>
    );
};

export default Main;
