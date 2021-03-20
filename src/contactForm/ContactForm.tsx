import React from 'react'
import style from './ContactForm.module.css'

function ContactForm() {
    return (
        <div className={style.contacts}>
                <div className={style.container}>
                <h2 className={style.title}>Участвовать в проекте</h2>

                <form className={style.forms}>
                    <input className={style.input} type="text" placeholder="Ваше имя и фамилия" />
                    <input className={style.input} type="text" placeholder="Ваш email" />
                    <textarea className={style.textarea}
                              placeholder="Сообщение"></textarea>
                    <input className={style.button} type="submit" />
                </form>


                </div>
            </div>

    )
}

export default ContactForm;