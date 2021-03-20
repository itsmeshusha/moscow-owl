import React from 'react';
import style from './Report.module.css'

type PropsType = {
    title: string
}

function Report(props: PropsType) {
    return (
        <div className={style.report}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
        </div>
    );
}

export default Report;