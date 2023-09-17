/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import Container from "@mui/material/Container";
import styles from "./styles.module.css";

const ChapterOne = () => {
    const KeyTakeaways = [
        {
            item: "Re-rendering is how React updates components with new data. Without re-renders, there will be no interactivity in our apps.",
        },
        {
            item: "State update is the initial source of all re-renders.",
        },
        {
            item: "If a components re-render is triggered, all nested components inside that component will be re-rendered.",
        },
        {
            item: "During the normal React re-renders cycle (without the use of memoization), props change doesnt matter: components will re- render even if they dont have any props.",
        },
        {
            item: "We can use the pattern known as 'moving state down' to prevent unnecessary re-renders in big apps.",
        },
        {
            item: "State update in a hook will trigger the re-render of a component that uses this hook, even if the state itself is not used.",
        },
        {
            item: "In the case of hooks using other hooks, any state update within that chain of hooks will trigger the re-render of a component that uses the very first hook.",
        },
    ];
    return (
        <Container>
            <h1>Chapter 1: Intro to re-render</h1>
            <h3>Key Takeaways:</h3>
            <ul>
                {KeyTakeaways.map((data) => {
                    return <li className={styles.li}> {data.item}</li>;
                })}
            </ul>
        </Container>
    );
};

export default ChapterOne;
