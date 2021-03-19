import React from 'react';
import style from './Nav.module.css'


function Nav() {
    return (
        <div className={style.nav}>
            <a href={""}>Главная</a>
            <a href={""}>Лига</a>
            <a href={""}>Отчеты</a>
            <a href={""}>Участвовать в проекте</a>
            <a href={""}>Контакты</a>
        </div>
    );
}

export default Nav;