import React from "react";
import "../assets/main.css";

const Layout = (props) => {
    return(
        <div className="site">
            <div>
                <header>{props.header}</header>
                <main>
                    <section>{props.children}</section>
                </main>
            </div>
            <footer>
                <nav>{props.footer}</nav>
            </footer>
        </div>
    )
} 

export default Layout;