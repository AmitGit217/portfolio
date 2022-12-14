import React from "react";
import "../blocks/sidebar.css";

export default function SideBar(props: {
    nav: string[];
    compToShow: any;
    isActive: string;
}) {
    return (
        <div className='sidebar'>
            {props.nav.map((nav) => {
                return (
                    <p
                        className={`sidebar__nav  ${
                            props.isActive === nav && "sidebar__nav_active"
                        }`}
                        onClick={() => props.compToShow(nav)}>
                        {nav}
                    </p>
                );
            })}
        </div>
    );
}
