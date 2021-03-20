import React from 'react'
import style from './ContactForm.module.css'

function ContactForm() {
    return (
        <div className={style.contacts}>
                <div className={style.container}>
                <h2 className={style.title}>My Contacts</h2>

                <form className={style.forms}>
                    <input className={style.input} type="text" placeholder="Your fullname" />
                    <input className={style.input} type="text" placeholder="Your email" />
                    <textarea className={style.textarea}
                              placeholder="Details"></textarea>
                    <input className={style.button} type="submit" />
                </form>


                </div>
            </div>

    )
}

export default ContactForm;