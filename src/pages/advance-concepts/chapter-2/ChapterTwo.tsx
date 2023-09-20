/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import Container from "@mui/material/Container";
import styles from "./styles.module.css";

const ChapterTwo = () => {
    const KeyTakeaways = [
        {
            item: "A Component is just a function that accepts an argument (props) and returns Elements that should be rendered when this Component renders on the screen. const A = () => <B /> is a Component.",
        },
        {
            item: "An Element is an object that describes what needs to be rendered on the screen, with the type either a string for DOM elements or a reference to a Component for components. const b = <B /> is an Element.",
        },
        {
            item: "Re-render is just React calling the Component's function.",
        },
        {
            item: "A component re-renders when its element object changes, as determined by Object.is comparison of it before and after re- render.",
        },
        {
            item: "When elements are passed as props to a component, and this component triggers a re-render through a state update, elements that are passed as props won't re-render.",
        },
        {
            item: "'children' are just props and behave like any other prop when they are passed via JSX nesting syntax: <Parent> <Child /> </Parent> same as <Parent children={<Child />} />",
        },
    ];
    return (
        <Container>
            <h1>Chapter 2: Elements, children as props, and re-renders</h1>
            <h3>Key Takeaways:</h3>
            <ul>
                {KeyTakeaways.map((data) => {
                    return <li className={styles.li}> {data.item}</li>;
                })}
            </ul>
        </Container>
    );
};

export default ChapterTwo;
