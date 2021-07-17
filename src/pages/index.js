import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout"
import * as styles from '../styles/Home.module.scss'
import portrait from '../images/portrait.jpg'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <div className={styles.container}>
          <br/>
          <header>
          <h1>Hey, I'm <span>
            Jordan</span>,<br/> a 
            <span className={styles.gradientText}> Web Developer.</span></h1>
          </header>
          <div className={styles.basics}>
            <div className={styles.developer}>
              <img className={styles.portrait} src={portrait} alt="Developer Portrait" />
              <Link to="/contact" className={styles.contactButton}>Contact me →</Link>
            </div>
            <div className={styles.testimonial}>
              <h3 className={styles.gradientText}>Testimonials</h3>
              <p>As a developer and tech enthusiast, <br/>
              my goal is to help create a better, more intuitive web. <br/>
              By using tools such as
              <span className={styles.gradientText}> HTML, CSS, SASS, ReactJS, Gatsby,
              and GraphQL</span>, I work to create beautiful user experiences.</p>
            </div>
          </div>
          <div className={styles.projects}>
            <h1><span className={styles.gradientText}>Projects</span></h1>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage
