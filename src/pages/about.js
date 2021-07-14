import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'


const AboutPage = () => {
    return (
        <div>
            <Layout>
                <h1>About Me</h1>
                <p>I am currently studying web development.</p>
                <p>Looking for a Developer? <Link to="/contact">Contact me!</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage