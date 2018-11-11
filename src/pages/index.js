import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from "gatsby-image"

const IndexPage = ({data}) => (
    <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem', backgroundColor: 'blue' }}>
            <Img fixed={data.placeholderImage.childImageSharp.fixed} />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)

export const query = graphql`
    query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
            childImageSharp {
                fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

export default IndexPage;
