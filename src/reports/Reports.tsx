import React from 'react';
import style from './Reports.module.css'
import Report from "./report/Report";
import tourImg1 from '../common/assets/tour1.jpg'
import tourImg2 from '../common/assets/tour2.jpg'

export type TourImageType = {
    backgroundImage: string
}

function Reports() {
    const tour1: TourImageType = {
        backgroundImage: `url(${tourImg1})`
    }
    const tour2: TourImageType = {
        backgroundImage: `url(${tourImg2})`
    }

    return (
        <div className={style.reportsBlock}>
            <div className={style.container}>
                <h2 className={style.title}>Отчеты</h2>
                <div className={style.reports}>
                    <Report title={"Турнир 1"} image={tour1}/>
                    <Report title={"Турнир 2"} image={tour2}/>
                </div>
            </div>
        </div>
    );
}

export default Reports;