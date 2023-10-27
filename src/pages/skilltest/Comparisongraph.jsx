import React from 'react'
import styles from "./Skill.module.scss"
import graph from "../../assets/graph.png"
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'


const ComparisonGraph = () => {
    const data = {
        labels: ['0%', '20%', '40%', "60%", "80%", "100%"],
        datasets: [
            {
                label: "elem?.name",
                data: [1, 6, 4, 5, 2, 1,],
                borderWidth: 1.5,
                tension: 0.7,
                fill: false,

                // backgroundColor: colorgenerated,
                // borderColor: colorgenerated,
            }],
    }
    const options = {
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                display: false, // This will hide the y-axis
            },

        },
        plugins: {
            legend: {
                display: false,
            },
        },

    };

    return (
        <div className={styles.graphDiv}>
            <div className={styles.descDiv}>
                <span className={styles.desc}>
                    <p className={styles.comparison}> Comparison Graph </p>
                    <p> You scored 37% percentile which is lower than the average percentile
                        72% of all the engineers who took this assessment
                    </p>
                </span>
                <span>
                    <img src={graph} alt="graph" />
                </span>
            </div>
            <div className={styles.comparisonGraph}>
                <Line data={data} options={options} />
            </div>
        </div>
    )
}

export default ComparisonGraph