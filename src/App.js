import React, { useEffect } from "react";
import Reactotron from "reactotron-react-js";

function App() {
    useEffect(() => {
        setTimeout(() => {
            Reactotron.log(process.env);
            Reactotron.log(process.env.REACT_APP_MARVEL_ACCESS_KEY);
            Reactotron.log(process.env.REACT_APP_MARVEL_SECRET_KEY);
        }, 3000);
    }, []);

    return <div className="App">Hello World!</div>;
}

export default App;
