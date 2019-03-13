import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout';
import SEO from '../components/Seo';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
    <h2>This my personal web page</h2>
  </Layout>
)

export default IndexPage
