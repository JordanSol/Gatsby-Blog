import React from 'react'
import { Link } from 'gatsby'
import * as styles from './Navbar.module.scss'
import logo from '../images/logo.svg'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Link  className={styles.header} to="/">
                    <img src={logo} alt="logo" className={styles.logo}/>
                </Link>
                <ul className={styles.list}>
                    <li><Link className={styles.link} activeClassName={styles.activeLink} to="/">Home</Link></li>
                    <li><Link className={styles.link} activeClassName={styles.activeLink} to="/about">About</Link></li>
                    <li><Link className={styles.link} activeClassName={styles.activeLink} to="/contact">Contact</Link></li>
                    <li><Link className={styles.link} activeClassName={styles.activeLink} to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar