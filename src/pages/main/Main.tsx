import React, { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useAppDispatch, useAppSelector } from "feature/redux/hooks";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { getPosts } from "feature/redux/posts/postsSlice";
import Container from "@mui/material/Container";
import style from "./Main.module.css";
import BasicCard from "components/basicCard/BasicCard";
import { booksData, moviesData, laptopsData, tabListData } from "./utils";
import type { Book, Movie, Laptop } from "components/basicSelect/types";
import type { tabListType } from "./types";
import { BasicButton } from "components/basicButton";
import { BasicSelect } from "components/basicSelect";

const getPostLabel = "Get Post API";
const goToAdmin = 'Admin';
const goToHome = 'Home';
const goToUsers = 'Users'

const routes = {
    home: '/home',
    admin: '/admin',
    users: '/users'
} as const;

type RouteKeys = keyof typeof routes; //extract object's value
type Route = (typeof routes)[RouteKeys]; 

const goToRoute = (route:  Route) => {
    console.log('routes: ', route)
}

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

    const [book, setBook] = useState<Book>(booksData[0]);
    const [movie, setMovie] = useState<Movie>(moviesData[0]);
    const [laptop, setLaptop] = useState<Laptop>(laptopsData[0]);

    const [tab, setTab] = useState<tabListType>(tabListData[0]);

    const getSelect = (tab: tabListType) => {
        switch (tab) {
            case "Books":
                return (
                    <BasicSelect<Book>
                        values={booksData}
                        onChange={(val) => setBook(val)}
                        label={"Book List"}
                        selected={book.id}
                        required={true}
                        displayLabel={(val) =>
                            `${val.title} - ${val.author} - ${val.id}`
                        }
                    />
                );
            case "Laptops":
                return (
                    <BasicSelect<Laptop>
                        values={laptopsData}
                        onChange={(val) => setLaptop(val)}
                        label={"Laptop List"}
                        selected={laptop.id}
                        required={false}
                        displayLabel={(val) =>
                            `${val.model} - ${val.releaseDate} - ${val.id}`
                        }
                    />
                );
            case "Movies":
                return (
                    <BasicSelect<Movie>
                        values={moviesData}
                        onChange={(val) => setMovie(val)}
                        label={"Movie List"}
                        selected={movie.id}
                        required={false}
                        displayLabel={(val) =>
                            `${val.title} - ${val.releaseDate} - ${val.id}`
                        }
                    />
                );
        }
    };

    const selectedTab = getSelect(tab);

    console.log("main render invoked!");
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

                {/* <Stack spacing={2}>
                    <Item> */}
                <BasicButton
                    label={getPostLabel}
                    eventHandler={() => dispatch(getPosts())}
                />
                {/* </Item>
                </Stack> */}

                {/* <Stack spacing={2}>
                    <Item> */}
                <BasicSelect<tabListType>
                    values={tabListData}
                    onChange={(val) => setTab(val)}
                    label={"Category"}
                    selected={tab}
                    required={true}
                    displayLabel={(val) => `${val}`}
                />
                {/* </Item>
                </Stack> */}

                {selectedTab}

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

            <Box sx={{ bgcolor: '#cfe8fc', height: '50vh'}}>
                <BasicButton
                    label={goToHome}
                    eventHandler={() => goToRoute('/home')}
                />

                <BasicButton
                    label={goToAdmin}
                    eventHandler={() => goToRoute('/admin')}
                />

                <BasicButton
                    label={goToUsers}
                    eventHandler={() => goToRoute('/users')}
                />
            </Box>
        </Container>
    );
};

export default Main;
