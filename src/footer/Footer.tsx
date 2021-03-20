import React from 'react';
import style from './Footer.module.css'

function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <h2 className={style.title}>Имя Фамилия</h2>
                <div className={style.socialMedia}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <h3>© 2021 All rights Reserved</h3>
            </div>

        </div>
    )
}

export default Footer;