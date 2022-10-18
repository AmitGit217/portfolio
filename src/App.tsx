import React, { useState } from "react";
import Home from "./pages/Home";
import "./blocks/main.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
    const [showComp, setComp] = useState("");
    const showCompFunc = (comp: string) => {
        setComp(comp);
    };

    return (
        <main className='main'>
            <Header showMenu={showCompFunc} />
            {showComp === "" && <Home />}
            {showComp === "menu" && <Menu setMenu={showCompFunc} />}
            {showComp === "about" && <About setMenu={showCompFunc} />}
            {showComp === "projects" && <Projects setMenu={showCompFunc} />}
        </main>
    );
}

export default App;
