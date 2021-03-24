import React from 'react';
import style from './Report.module.css'
import {TourImageType} from "../Reports";


type PropsType = {
    title: string
    image: TourImageType
}

function Report(props: PropsType) {


    return (
        <div className={style.report}>
            <div style={props.image} className={style.icon}></div>
            <h3>{props.title}</h3>
            <button className={style.btn}>Смотреть</button>
        </div>
    );
}

export default Report;