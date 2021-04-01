import React from 'react';
import style from './Nav.module.scss'


function Nav() {
    return (
        <div className={style.nav}>
            <a href={""}>Главная</a>
            <a href={""}>Лига</a>
            <a href={""}>Статистика</a>
            <a href={""}>Участвовать в проекте</a>
            <a href={""}>Контакты</a>
        </div>
    );
}

export default Nav;