import React from 'react';
import Achievements from './Achievements';
import Competition from './Competitions';
import News from './News';
import Raiting from './Raiting';
import Launguages from './Launguages';

function MainContainer () {
    return (
        <main className="home_main">
            <div className="left_sections">
            <Raiting/>
            <News/>
            </div>
            <Launguages/>
            <div className="right_sections">
            <Achievements/>
            <Competition/>
            </div>
        </main>
    )
}

export default MainContainer;