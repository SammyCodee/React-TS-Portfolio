import "./App.css";
import React from "react";

const Login = React.lazy(() =>
    import("./components/login").then(({ Login }) => ({ default: Login }))
);

const Main = React.lazy(() =>
    import("./pages/main").then(({ Main }) => ({ default: Main }))
);

function App() {
    return (
        <div className="App">
            <Login />
        </div>
    );
}

export default App;
