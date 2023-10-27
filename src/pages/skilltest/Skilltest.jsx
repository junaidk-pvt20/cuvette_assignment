import React from 'react'
import styles from "./Skill.module.scss"
import TestStatistic from './Teststatistic.jsx'
import ComparisonGraph from './Comparisongraph.jsx'
import QuestionAnalysis from './Questionanalysis.jsx'
import SyllabusAnalysis from './Syllabusanalysis.jsx'
const Skilltest = () => {
    return (

        <div className={styles.skillsContainer}>
            <p className={styles.heading}> Skill Test</p>
            <div className={styles.skillsDiv}>
                <div className={styles.skillSection} >
                    <TestStatistic />
                    <ComparisonGraph />
                </div>
                <div className={styles.skillSection}>
                    <SyllabusAnalysis />
                    <QuestionAnalysis />
                </div>
            </div>
        </div>

    )
}

export default Skilltest