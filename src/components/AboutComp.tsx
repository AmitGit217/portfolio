import React, { useState } from "react";
import SideBar from "./SideBar";

export default function AboutComp() {
    const [showData, setData] = useState("personal-info");
    const handleDataDisplay = (str: string) => {
        setData(str);
    };
    return (
        <section>
            <SideBar
                nav={["personal-info", "professional-info"]}
                compToShow={handleDataDisplay}
            />
        </section>
    );
}
