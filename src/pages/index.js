import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout"
import * as styles from '../styles/Home.module.scss'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <br/>
          <header>
          <h1>I'm <span>
            Jordan Freeman</span>,<br/> a 
            <span className={styles.gradientText}> Web Developer</span>.</h1>
          </header>
          <p className={styles.paragraph}>Am I the dev you're looking for? <Link to="/contact" className={styles.contactButton}>Contact me →</Link></p>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage
