import React from 'react'
import styles from "./Skill.module.scss"
import classNames from 'classnames';
const SyllabusAnalysis = () => {
    const SyllabusAnalysisList = [
        {
            id: 1,
            name: "HTML Tools, Forms, History",
            percentage: "80%",
        },
        {
            id: 2,
            name: "Tags & References in HTML",
            percentage: "60%",
        },
        {
            id: 3,
            name: "Tables & CSS Basics",
            percentage: "24%",
        },
        {
            id: 4,
            name: "Tables & CSS Basics",
            percentage: "96%",
        },

    ]
    const progresscolurClassName = (subject) => {
        console.log('subject', subject)
        switch (subject) {
            case 1:
                return {
                    bgcolor: styles.htmltool,
                    progresscolor: styles.htmltoolbg,
                    fontcolor: styles.fonthtmltool,
                };
            case 2:
                return {
                    bgcolor: styles.htmltag,
                    progresscolor: styles.htmltagbg,
                    fontcolor: styles.fonthtmltag,
                };
            case 3:
                return {
                    bgcolor: styles.htmltable1,
                    progresscolor: styles.htmltable1bg,
                    fontcolor: styles.fonthtmltable1,
                };
            case 4:
                return {
                    bgcolor: styles.htmltable2,
                    progresscolor: styles.htmltable2bg,
                    fontcolor: styles.fonthtmltable2,
                };
        }
    };
    return (
        <div className={styles.syllabus}>
            <p className={styles.stackHeader}> Syllabus wise Analysis </p>
            {SyllabusAnalysisList.map((elem) => {
                const color = progresscolurClassName(elem?.id)
                return (
                    <>
                        <p className={styles.stackName}> {elem?.name} </p>
                        <span className={styles.perDiv}>
                            <span className={classNames(styles.progressBar, color?.bgcolor)}>
                                <span className={classNames(styles.percentage, color?.progresscolor)}></span>
                            </span>
                            <span className={classNames(styles.perNum, color?.fontcolor)}> {elem?.percentage} </span>
                        </span>
                    </>
                )
            })}
        </div>
    )
}

export default SyllabusAnalysis