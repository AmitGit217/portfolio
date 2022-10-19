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
    const [activeNav, setActive] = useState("home");
    const [width, setWidth] = useState(0);
    const showCompFunc = (comp: string) => {
        setComp(comp);
    };
    const handleActiveNav = (comp: string) => {
        setActive(comp);
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
            <Header
                showMenu={showCompFunc}
                handleActiveNav={handleActiveNav}
                activeNav={activeNav}
            />
            {showComp === "" && activeNav === "home" && <Home />}
            {showComp === "menu" && (
                <Menu setMenu={showCompFunc} isComputer={isComputer} />
            )}
            {(showComp === "about" || activeNav === "about") && (
                <About setMenu={showCompFunc} isComputer={isComputer} />
            )}
            {(showComp === "projects" || activeNav === "projects") && (
                <Projects setMenu={showCompFunc} />
            )}
            {(showComp === "contact" || activeNav === "contact") && (
                <Contact setMenu={showCompFunc} />
            )}
        </main>
    );
}

export default App;
