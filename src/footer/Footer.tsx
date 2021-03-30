import React from 'react';
import style from './Footer.module.scss'
import telegram from '../common/assets/telegram.jpg'

function Footer() {
    const telegramImage = {
        backgroundImage: `url(${telegram})`
    }
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <div className={style.socialMedia}>
                    <div style={telegramImage} className={style.icon}></div>

                </div>
                <h3>© 2021 All rights Reserved</h3>
            </div>

        </div>
    )
}

export default Footer;