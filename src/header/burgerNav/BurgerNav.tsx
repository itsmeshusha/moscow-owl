import React, {useState} from 'react';
import style from './BurgerNav.module.scss'


function BurgerNav() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onMenuClickHandler = () => {
        setMenuIsOpen(!menuIsOpen)
    }
    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerItems} ${style.show}` : style.burgerItems}>
                <a href={""}>Главная</a>
                <a href={""}>Лига</a>
                <a href={""}>Статистика</a>
                <a href={""}>Участвовать в проекте</a>
                <a href={""}>Контакты</a>
            </div>
            <div className={style.burgerBtn} onClick={onMenuClickHandler}></div>
        </div>
    );
}

export default BurgerNav;