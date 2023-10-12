/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Container from "@mui/material/Container";
import DebouncedCallbackAndRef from "pages/advance-concepts/chapter-11/DebouncedCallbackAndRef";

const ChapterEleven = () => {
    return (
        <Container>
            <h1>
                Chapter 11. Implementing advanced debouncing and throttling with
                Refs
            </h1>

            <br />

            <h3>Extracted into a hook (same apply to throttle)</h3>
            <DebouncedCallbackAndRef />
        </Container>
    );
};

export default ChapterEleven;
