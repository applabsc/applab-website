import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

// import {fluidImage} from "../util/config";
import Layout from '../components/layout'


const IndexPage = ({data}) => (
    <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem', backgroundColor: 'blue' }}>
            <Img
                fluid={data.placeholderImage.childImageSharp.fluid}
            />
        </div>
        <Link to="/page-2/">Go to paeg 2</Link>
        <a href="http://eepurl.com/dEDGcH">Subscrive to mialing list</a>
    </Layout>
);

export const pageQuery = graphql`

    query {
        placeholderImage: file(relativePath: { eq: "gatsby-icon.png" }) {
            ...fluidImage
        }
    }
`;

export default IndexPage;
