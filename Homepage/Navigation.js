import React from "react";
import '../../src/App.css';

function Navigation () {
    return (
        <nav className="main_navigation">
            <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/contacts">Contacts</a></li>
                <li><a href="/jobs">Jobs</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;