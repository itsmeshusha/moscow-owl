import React from 'react';
import style from './Reports.module.css'
import Report from "./report/Report";


function Reports() {
    return (
        <div className={style.reportsBlock}>
            <div className={style.container}>
                <h2 className={style.title}>Отчеты</h2>
                <div className={style.reports}>
                    <Report title={"Турнир 1"}/>
                    <Report title={"Турнир 2"}/>
                    <Report title={"Турнир 3"}/>
                </div>
            </div>
        </div>
    );
}

export default Reports;