import React from "react";
import "../blocks/sidebar.css";

export default function SideBar(props: { nav: string[]; compToShow: any }) {
    return (
        <div className='sidebar'>
            {props.nav.map((nav) => {
                return (
                    <p
                        className='sidebar__nav'
                        onClick={() => props.compToShow(nav)}>
                        {nav}
                    </p>
                );
            })}
        </div>
    );
}
