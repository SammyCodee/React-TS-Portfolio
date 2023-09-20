/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import Container from "@mui/material/Container";
import styles from "./styles.module.css";

const ChapterThree = () => {
    const KeyTakeaways = [
        {
            item: "When a component renders another component, the configuration of which is controlled by props, we can pass the entire component element as a prop instead, leaving the configuration concerns to the consumer.",
        },
        {
            item: "If a component that has elements as props is rendered conditionally, then even if those elements are created outside of the condition, they will only be rendered when the conditional component is rendered.",
        },
        {
            item: "If we need to provide default props to the element from props, we can use the cloneElement function for that.",
        },
        {
            item: "This pattern, however, is very fragile. It's too easy to make a mistake there, so use it only for very simple cases.",
        },
    ];
    return (
        <Container>
            <h1>Chapter 3: Configuration concerns with elements as props</h1>
            <h3>Key Takeaways:</h3>
            <ul>
                {KeyTakeaways.map((data) => {
                    return <li className={styles.li}> {data.item}</li>;
                })}
            </ul>
        </Container>
    );
};

export default ChapterThree;
