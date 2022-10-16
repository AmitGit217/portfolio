import React, { useState } from "react";
import Home from "./pages/Home";
import "./blocks/main.css";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
    const [showMenu, setMenu] = useState(false);
    const showMenuFunc = () => {
        setMenu(!showMenu);
    };
    return (
        <main className='main'>
            <Header showMenuProp={showMenuFunc} />
            {showMenu ? <Menu showMenu={showMenu} /> : <Home />}
        </main>
    );
}

export default App;
