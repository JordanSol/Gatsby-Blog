import React from 'react'
import Layout from '../components/Layout'

import { graphql, useStaticQuery } from 'gatsby'


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
                    }
                }
            }
        }
    `)

    return (
        <div>
            <Layout>
                <h1>Blog</h1>
                <p>Blog posts go here</p>
                <ul className="posts">
                    {data.allMarkdownRemark.edges.map(post => {
                        return (
                            <li>
                                <h3>{post.node.frontmatter.title}</h3>
                                <p>{post.node.frontmatter.date}</p>
                            </li>
                        )
                    })}
                </ul>
            </Layout>
        </div>
    )
}

export default BlogPage