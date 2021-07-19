import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFound = () => {
    return (
        <Layout>
            <h1>404 Page not found</h1>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound