import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import styles from "./Layout.module.scss"
import LeftSideBar from './LeftSideBar'
const Layout = () => {
    return (
        <>
            <TopBar />
            <div className={styles.container}>
                <LeftSideBar />
                <div className={styles.outletDiv}>
                    <Outlet />

                </div>
            </div>
        </>
    )
}

export default Layout