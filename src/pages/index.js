import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import {GlobalStyles} from "../util/config";

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

            <p style={{...styles.subtitleText, ...styles.centered}}>
                Learn how to build mobile apps using the latest technologies,
                build real world projects and meet awesome peers.
            </p>

            <div style={styles.applabLogo}>
                <Img
                    fixed={data.appsBanner.childImageSharp.fluid}
                />
            </div>

            <a
                style={styles.applyButton}
                href="https://www.typeform.com/"
                target="_blank"
            >
                Apply here
            </a>
        </div>



        <Link to="/page-2/">Go to paeg 2</Link>



    </Layout>
);

const styles = {
    container: {
        flexDirection: 'column',
        alignItems: 'center',
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
        float: 'none',
        margin: 0,
    },
    subtitleText: {
        fontFamily: GlobalStyles.fontStack,
        maxWidth: '60%',
        fontSize: 24,
        fontWeight: 300,
        lineHeight: '32px',
        textAlign: 'center',
        color: '#F25C62',
    },
    applyButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40px',
        width: '150px',
        borderRadius: '22px',
        border: 'solid #00D2FF 2px',
        outline: 'none',
        cursor: 'pointer !important',
        color: '#00D2FF',
        backgroundColor: 'transparent',
        textDecoration: 'none',
        fontSize: '18px',
        fontFamily: GlobalStyles.headerFontStack,
        fontWeight: 500,
        ":hover": {
            border: 'solid black 2px',
        }
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
