import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import * as styles from './Blog.module.scss'

export const query = graphql`
    query (
        $slug: String!) {
        markdownRemark (fields: {slug: {eq: $slug}}) {
          frontmatter {
            title
            date
            }
          html
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <h1 className={styles.title}>{props.data.markdownRemark.frontmatter.title}</h1>
            <p className={styles.date}>{props.data.markdownRemark.frontmatter.date}</p>
            <hr className={styles.divider}/>
            <div className={styles.content} dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default Blog