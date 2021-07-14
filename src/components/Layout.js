import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import '../styles/index.scss'

import * as styles from './Layout.module.scss'

const Layout = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Navbar/>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout