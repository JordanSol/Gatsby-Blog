import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery, Link } from 'gatsby'
import * as styles from '../styles/BlogPage.module.scss'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                fields: publishedDate,
                order: DESC
                }
            )
            {
              edges {
                node {
                    title
                    slug
                    publishedDate(formatString: "MMMM Do, YYYY")
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
                    {data.allContentfulBlogPost.edges.map(post => {
                        return (
                            <li className={styles.post}>
                                <Link to={`/blog/${post.node.slug}`}>
                                    <h3>{post.node.title}</h3>
                                    <p>{post.node.publishedDate}</p>
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