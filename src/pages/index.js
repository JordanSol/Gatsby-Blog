import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1>Hello!</h1>
        <p>Looking for a developer? <Link to="/contact">Contact me.</Link></p>
      </Layout>
    </div>
  )
}

export default IndexPage
