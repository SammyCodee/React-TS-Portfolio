import React, { FC, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { getPosts } from "../../redux/posts/postsSlice";
import Container from "@mui/material/Container";
import style from "./Main.module.css";
import BasicCard from "../../components/basicCard/BasicCard";

const Main: FC = () => {
    const dispatch = useAppDispatch();

    const { user, isSuccess } = useAppSelector((state) => state.user);
    const getUsername = user.username;
    const getPassword = user.password;

    const { data, error, loading } = useAppSelector((state) => state.posts);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#66c5cd",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <Container>
            <Box
                sx={{
                    backgroundColor: "white",
                }}
            >
                <Stack spacing={2}>
                    <Item>
                        <span>Username: {getUsername}</span>
                    </Item>
                </Stack>

                <Stack spacing={2}>
                    <Item>
                        <span>Password: {getPassword}</span>
                    </Item>
                </Stack>

                <Stack spacing={3}>
                    {loading ? (
                        <div>LOADING...</div>
                    ) : (
                        data &&
                        data.map((post, index) => {
                            return (
                                <div key={`post-${index}`}>
                                    <BasicCard
                                        id={post.id}
                                        userId={post.userId}
                                        title={post.title}
                                        body={post.body}
                                    ></BasicCard>
                                </div>
                            );
                        })
                    )}
                </Stack>
            </Box>
            {error && error}
        </Container>
    );
};

export default Main;
