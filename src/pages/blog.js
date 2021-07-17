import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import * as styles from '../styles/BlogPage.module.scss'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter{
                            title
                            date
                        }
                        html 
                        excerpt
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <div>
            <Layout>
                <h1 className={styles.title}>Blog</h1>
                <hr className={styles.divider}/>
                <ul className={styles.posts}>
                    {data.allMarkdownRemark.edges.map(post => {
                        return (
                            <li className={styles.post}>
                                <Link to={`/blog/${post.node.fields.slug}`}>
                                    <h3>{post.node.frontmatter.title}</h3>
                                    <p>{post.node.frontmatter.date}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </Layout>
        </div>
    )
}

export default BlogPage