import React from 'react'
import styles from "./Layout.module.scss"
import { NavLink } from 'react-router-dom'
import dashboard from "../assets/dashboard.svg"
import skill from "../assets/skill.svg"
import internship from "../assets/internship.svg"
const LeftSideBar = () => {
    const sideBarNavigation = [
        {
            id: 1,
            pageName: "Dashboard",
            path: "/dashboard",
            icon: dashboard,

        }, {
            id: 2,
            pageName: "Skill Test",
            path: "/skilltest",
            icon: skill,
        }, {
            id: 3,
            pageName: "Internship",
            path: "/internship",
            icon: internship,
        }]
    return (
        <div className={styles.leftSide}>
            {sideBarNavigation.map((data) => (
                <>

                    <NavLink
                        key={data?.id}
                        className={({ isActive }) =>
                            `${styles.navLink} ${isActive && styles.activeLink}`
                        }
                        to={data.path}
                    >
                        <div className={styles.navlist} key={data?.id}>
                            <img
                                src={data?.icon}
                                className={styles.icon}
                                alt="icon"
                            />
                            <p>{data?.pageName}</p>
                        </div>
                    </NavLink>

                </>
            ))}
        </div >
    )
}

export default LeftSideBar