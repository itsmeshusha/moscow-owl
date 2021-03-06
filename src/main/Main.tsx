import React from 'react';
import style from './Main.module.scss'
import bgImage from '../common/assets/strix.jpg'

function Main() {
    const bgImg = {
        backgroundImage: `url(${bgImage})`
    }

    return (
        <div style={bgImg} className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.text}>
                    <h1>О нас</h1>
                    <span className={style.description}>"Lorem ipsum dolor sit amet, Лорем ипсум долор сит амет, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
                </div>
            </div>
        </div>
    );
}

export default Main;