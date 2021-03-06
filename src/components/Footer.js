import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as styles from './Footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                author
                }
            }
        }
    `)

    return (
        <footer className={styles.footer}>
            <p>Created by {data.site.siteMetadata.author}, © 2021</p>
        </footer>
    )
}

export default Footer