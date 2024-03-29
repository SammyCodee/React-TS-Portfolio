/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "pages/main";
import { UseCallbackConcepts } from "pages/useCallback-concepts";
import { Login } from "pages/login";
import { ChapterOne } from "pages/advance-concepts/chapter-1";
import { ChapterThree } from "pages/advance-concepts/chapter-3";
import { ChapterTwo } from "pages/advance-concepts/chapter-2";
import { ChapterNine } from "pages/advance-concepts/chapter-9";
import { ChapterEleven } from "pages/advance-concepts/chapter-11";
import { UseMemoConcepts } from "pages/useMemo-concepts";
import { CloneObjectExample } from "pages/cloneObjectExample";

const RootRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route
                path="/useCallbackConcepts"
                element={<UseCallbackConcepts />}
            />
            <Route path="/useMemoConcepts" element={<UseMemoConcepts />} />
            <Route
                path="/cloneObjectExample"
                element={<CloneObjectExample />}
            />
            <Route path="/chapterOne" element={<ChapterOne />} />
            <Route path="/chapterTwo" element={<ChapterTwo />} />
            <Route path="/chapterThree" element={<ChapterThree />} />
            <Route path="/chapterNine" element={<ChapterNine />} />
            <Route path="/chapterEleven" element={<ChapterEleven />} />
        </Routes>
    );
};

export default RootRoute;
