import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import * as styles from '../styles/About.module.scss'


const AboutPage = () => {
    return (
        <div>
            <Layout>
                <h1 className={styles.title}>About Me</h1>
                <p>Hey there! I'm Jordan Freeman, a self taught web developer.
                I enjoy creating beautiful, meaningful experiences that leave a 
                lasting impression. My interest in web development began with my
                love for learning and acquiring new skills, luckily, this one stuck. 
                I don't see a future for myself that doesn't involve coding.</p>

                <p>Finally, a year later, I have grown confident in my newfound skills 
                and am ready to share them with the world. However, the learning doesn't 
                end here, my main focus is developing my fundamentals while staying on 
                the cutting edge of web development.</p>

                <p>Here are some of the technologies I have worked with:</p>
                <ul>
                    <li>HTML5</li>
                    <li>(s)CSS</li>
                    <li>JavaScript (ES6+)</li>
                    <li>Node.js</li>
                    <li>ReactJS</li>
                    <li>GatsbyJS</li>
                    <li>GraphQL</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Python</li>
                </ul>
                <p>Looking for a Developer? <Link to="/contact">Contact me!</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage