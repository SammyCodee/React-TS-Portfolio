import "./App.css";
import React, { Suspense } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

const Login = React.lazy(() =>
    import("./pages/login").then(({ Login }) => ({ default: Login }))
);

const Main = React.lazy(() =>
    import("./pages/main").then(({ Main }) => ({ default: Main }))
);

function App() {
    const isSuccessLogin = useAppSelector((state) => state.user.isSuccess);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="App">{isSuccessLogin ? <Main /> : <Login />}</div>
        </Suspense>
    );
}

export default App;
