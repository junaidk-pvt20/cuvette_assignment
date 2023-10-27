import React from 'react'
import styles from "./Skill.module.scss"
import arrow from "../../assets/arrow.svg"
const QuestionAnalysis = () => {
    return (
        <div className={styles.questionAnalysisDiv}>
            <span className={styles.questionAnalysisHeader}>
                <p className={styles.questionAnalysisName}> Question Analysis </p>
                <p className={styles.questionAnalysisMarks}> 07 / 15 </p>
            </span>
            <p className={styles.questionAnalysisDesc}> <span className={styles.bold}> You scored 7 question correct out of 15. </span> However it still needs some improvements</p>
            <div className={styles.outercircle}>
                <div className={styles.innercircle}>
                    <img src={arrow} />
                </div>
            </div>
        </div >
    )
}

export default QuestionAnalysis