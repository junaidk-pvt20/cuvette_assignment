import React from 'react'
import styles from "./Layout.module.scss"
import logo from "../assets/cuvette_logo.svg"
import profile from "../assets/profile.png"
const TopBar = () => {
    return (
        <div className={styles.topnav}>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div className={styles.right}>
                <img src={profile} alt="Logo" />
                <p className={styles.name}> Siddhart Jain </p>
            </div>
        </div>
    )
}

export default TopBar