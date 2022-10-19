import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import "./blocks/main.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
    const [showComp, setComp] = useState("");
    const [isComputer, setIsComputer] = useState(false);
    const [width, setWidth] = useState(0);
    const showCompFunc = (comp: string) => {
        setComp(comp);
    };
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
        if (window.innerWidth > 1000) {
            setIsComputer(true);
        } else {
            setIsComputer(false);
        }
    }, [width]);

    return (
        <main className='main'>
            <Header showMenu={showCompFunc} />
            {showComp === "" && <Home />}
            {showComp === "menu" && (
                <Menu setMenu={showCompFunc} isComputer={isComputer} />
            )}
            {showComp === "about" && <About setMenu={showCompFunc} />}
            {showComp === "projects" && <Projects setMenu={showCompFunc} />}
            {showComp === "contact" && <Contact setMenu={showCompFunc} />}
        </main>
    );
}

export default App;
