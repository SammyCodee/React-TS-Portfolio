/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { Book, Movie, Laptop } from "components/basicSelect/types";
import type { tabListType } from "./types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useAppDispatch, useAppSelector } from "feature/redux/hooks";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { getPosts } from "feature/redux/posts/postsSlice";
import Container from "@mui/material/Container";
// import style from './Main.module.css'
import BasicCard from "components/basicCard/BasicCard";
import { booksData, moviesData, laptopsData, tabListData } from "./utils";
import { BasicButton } from "components/basicButton";
import { BasicSelect } from "components/basicSelect";
import { getWeather } from "feature/redux/weather/weatherSlice";
/**
 *  test the type extension
 */
import { allCats } from "pages/typeExtension/TypeExtension";

const getPostLabel = "Get Post API";
const goToAdmin = "Admin";
const goToHome = "Home";
const goToUsers = "Users";
const goToUseCallbackConcepts = "UseCallback Concepts";
const goToUseMemoConcepts = "UseMemo Concepts";
const goToCloneObjectExample = "Clone Object Example";
const goToChapterOne = "Chapter 1";
const goToChapterTwo = "Chapter 2";
const goToChapterThree = "Chapter 3";
const goToChapterFour = "Chapter 4";
const goToChapterFive = "Chapter 5";
const goToChapterNine = "Chapter 9";
const goToChapterEleven = "Chapter 11";

const routes = {
    home: "/home",
    admin: "/admin",
    users: "/users",
    useCallbackConcepts: "/useCallbackConcepts",
    useMemoConcepts: "/useMemoConcepts",
    cloneObjectExample: "/cloneObjectExample",
    chapterOne: "/chapterOne",
    chapterTwo: "/chapterTwo",
    chapterThree: "/chapterThree",
    chapterFour: "/chapterFour",
    chapterFive: "/chapterFive",
    chapterNine: "/chapterNine",
    chapterEleven: "/chapterEleven",
} as const;

type RouteKeys = keyof typeof routes; // extract object's key value
type Route = (typeof routes)[RouteKeys];

/**
 * Writing functions outside the component makes it easier to
 * define, read, and test if the function does not rely on props
 *
 * Avoid create new instance every re-render
 * Reference: https://medium.com/the-fours/writing-functions-outside-vs-inside-in-react-c9044ea31ee2
 */

const getWeatherLabel = "Get Weather API";

const Main = () => {
    console.log("merge cats: ", allCats);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const goToRoute = (route: Route) => {
        console.log("routes: ", route);
        navigate(route);
    };
    const {
        user,
        // isSuccess
    } = useAppSelector((state) => state.user);
    const getUsername = user.username;
    const getPassword = user.password;

    const { data, error, loading } = useAppSelector((state) => state.posts);

    // const { data } = useAppSelector((state) => state.weather);
    console.log("data", data);

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
                        onChange={(val) => {
                            setBook(val);
                        }}
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
                        onChange={(val) => {
                            setLaptop(val);
                        }}
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
                        onChange={(val) => {
                            setMovie(val);
                        }}
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
                    eventHandler={async () => await dispatch(getPosts())}
                />

                <BasicButton
                    label={getWeatherLabel}
                    eventHandler={async () => await dispatch(getWeather())}
                />
                {/* </Item>
                </Stack> */}

                {/* <Stack spacing={2}>
                    <Item> */}
                <BasicSelect<tabListType>
                    values={tabListData}
                    onChange={(val) => {
                        setTab(val);
                    }}
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
                        data?.map((post, index) => {
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
            {error != null && error}

            <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>
                <BasicButton
                    label={goToHome}
                    eventHandler={() => {
                        goToRoute("/home");
                    }}
                />

                <BasicButton
                    label={goToAdmin}
                    eventHandler={() => {
                        goToRoute("/admin");
                    }}
                />

                <BasicButton
                    label={goToUsers}
                    eventHandler={() => {
                        goToRoute("/users");
                    }}
                />

                <BasicButton
                    label={goToUseCallbackConcepts}
                    eventHandler={() => {
                        goToRoute("/useCallbackConcepts");
                    }}
                />

                <BasicButton
                    label={goToUseMemoConcepts}
                    eventHandler={() => {
                        goToRoute("/useMemoConcepts");
                    }}
                />

                <BasicButton
                    label={goToCloneObjectExample}
                    eventHandler={() => {
                        goToRoute("/cloneObjectExample");
                    }}
                />
            </Box>

            <Box sx={{ bgcolor: "#FF5733", height: "50vh" }}>
                <BasicButton
                    label={goToChapterOne}
                    eventHandler={() => {
                        goToRoute("/chapterOne");
                    }}
                />

                <BasicButton
                    label={goToChapterTwo}
                    eventHandler={() => {
                        goToRoute("/chapterTwo");
                    }}
                />

                <BasicButton
                    label={goToChapterThree}
                    eventHandler={() => {
                        goToRoute("/chapterThree");
                    }}
                />

                <BasicButton
                    label={goToChapterNine}
                    eventHandler={() => {
                        goToRoute("/chapterNine");
                    }}
                />

                <BasicButton
                    label={goToChapterEleven}
                    eventHandler={() => {
                        goToRoute("/chapterEleven");
                    }}
                />
            </Box>
        </Container>
    );
};

export default Main;
