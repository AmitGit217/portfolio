import React from "react";
import Home from "./pages/Home";
import "./blocks/main.css";
import Header from "./components/Header";

function App() {
    return (
        <main className='main'>
            <Header />
            <Home />
        </main>
    );
}

export default App;
