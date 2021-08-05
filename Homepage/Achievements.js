import React from 'react';
import '../../src/homepage/homePageStyle.css';

function Achievements () {
    return (
        <section className="achievements">
            <h2>Achievements</h2>
            <div>
                <ol>
                    <li><a href="/">God of code</a></li>
                    <li><a href="/">"hello world" guru</a></li>
                    <li><a href="/">The future senior</a></li>              
                </ol>
            </div>
        </section>
    )
}

export default Achievements;
