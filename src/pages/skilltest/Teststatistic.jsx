import React, { useState } from 'react'
import styles from "./Skill.module.scss"
import html from "../../assets/html.png"
import rank from "../../assets/rank.svg"
import percentage from "../../assets/percentage.svg"
import correct from "../../assets/correct.png"
import Modal from "../../components/modal/Index"
const TestStatistic = () => {
    const [statistics, setStatistics] = useState({
        rank: 12_890,
        percentile: 37,
        correctanswer: 0o7,

    })
    const statisticsDetails = [
        {
            img: rank,
            header: statistics?.rank || 0,
            title: "Your Rank",
        },
        {
            img: percentage,
            header: `${statistics?.percentile}%` || "0%",
            title: "Percentile",
        },
        {
            img: correct,
            header: `${statistics?.correctanswer || 0} /15`,
            title: "Correct Answers",
        }
    ]

    const [modalOpen, setModalOpen] = useState(false)
    const handleModal = () => {
        setModalOpen(!modalOpen)
    }
    return (
        <>
            <div className={styles.questionDetails}>
                <span className={styles.info}>
                    <img src={html} alt='html' />
                    <span>
                        <p className={styles.stackName}>Hypertext Markup Language </p>
                        <p className={styles.testName}> Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021 </p>
                    </span>
                </span>
                <span>

                    <button className={styles.updatebutton} onClick={handleModal}> Update </button>
                </span>
            </div>
            <div className={styles.quickStatistics}>
                <p className={styles.statsheader}> Quick Statistics </p>
                <div className={styles.statsDetails}>
                    {statisticsDetails?.map((details) => {
                        return (
                            <>
                                <span key={details.header} className={styles.statsInfo}>
                                    <img src={details?.img} alt="ranking" />
                                    <span>
                                        <p className={styles.statsnum}>{details?.header}</p>
                                        <p className={styles.statsrank}> {details?.title?.toUpperCase()} </p>
                                    </span>
                                </span>
                                <hr></hr>
                            </>
                        )
                    })}
                </div>
            </div>
            <Modal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                img={html}
                statistics={statistics}
                setStatistics={setStatistics}
            >

            </Modal>

        </>
    )
}

export default TestStatistic