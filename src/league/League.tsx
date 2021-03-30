import React from 'react';
import style from './League.module.scss'
import force from '../common/assets/force.jpg'


function League() {
    const forceImg = {
        backgroundImage: `url(${force})`
    }

    return (
        <div className={style.leagueBlock}>
            <div className={style.container}>
                <div style={forceImg} className={style.photo}></div>
                <div className={style.text}>
                    <h2>Лига</h2>
                    <span className={style.description}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
                </div>

            </div>
        </div>
    );
}

export default League;