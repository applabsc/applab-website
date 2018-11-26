import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'

const IndexPage = ({data}) => (
    <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>

        <div style={styles.container}>
            <div style={styles.applabLogo}>
                <Img
                    fluid={data.applabLogo.childImageSharp.fluid}
                />
            </div>
        </div>

        <p style={{...styles.subtitleText, ...styles.centered}}>
            Learn how to build mobile apps using the latest technologies,
            build real world projects and meet awesome peers.
        </p>

        <div style={styles.applabLogo}>
            <Img
                fixed={data.applabLogo.childImageSharp.fluid}
            />
        </div>

        <Link to="/page-2/">Go to paeg 2</Link>



    </Layout>
);

const styles = {
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'purple',
        marginBottom: '1.45rem',
    },
    applabLogo: {
        maxWidth: '600px',
        float: 'none',
        marginTop: 0,
        marginBottom: '1.45rem',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    bannerImage: {
        maxWidth: '600px',
        float: 'none',
        marginTop: 0,
        marginBottom: '1.45rem',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    subtitleText: {
        fontFamily: 'Helvetica, Arial, sans-serif',
        maxWidth: '60%',
        fontSize: 24,
        fontWeight: 300,
        lineHeight: '32px',
        textAlign: 'center',
        color: '#F25C62',
    },
    centered: {
        float: 'none',
        margin: '0 auto',
    }
};

export const pageQuery = graphql`
    query {
        applabLogo: file(relativePath: { eq: "applab-logo.png" }) {
            ...fluidImage
        }
        appsBanner: file(relativePath: { eq: "app-store-connect.png" }) {
            ...fluidImage
        }
    }
`;

export default IndexPage;
