import React, { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { getPosts } from "../../redux/posts/postsSlice";
import Container from "@mui/material/Container";
import style from "./Main.module.css";
import BasicCard from "../../components/basicCard/BasicCard";
import BasicSelect from "../../components/basicSelect/BasicSelect";
import { booksData, moviesData, laptopsData } from "./utils";
import { Book, Movie, Laptop } from "../../components/basicSelect/types";

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

    const [book, setBook] = useState<Book>(booksData[0]);
    const [movie, setMovie] = useState<Movie>(moviesData[0]);
    const [laptop, setLaptop] = useState<Laptop>(laptopsData[0]);

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

                <Stack spacing={2}>
                    <Item>
                        <BasicSelect
                            values={booksData}
                            onChange={(val) => setBook(val)}
                            label={"Book List"}
                            selected={book.id}
                            required={true}
                        />
                    </Item>
                </Stack>

                <Stack spacing={2}>
                    <Item>
                        <BasicSelect
                            values={moviesData}
                            onChange={(val) => setMovie(val)}
                            label={"Movie List"}
                            selected={movie.id}
                            required={false}
                        />
                    </Item>
                </Stack>

                <Stack spacing={2}>
                    <Item>
                        <BasicSelect
                            values={laptopsData}
                            onChange={(val) => setLaptop(val)}
                            label={"Laptop List"}
                            selected={laptop.id}
                            required={false}
                            titleKey={"model"}
                        />
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
