import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'

import Layout from '../components/layout'
import {GlobalStyles} from '../util/config'
import DescriptionColumn from '../components/description-column';
import About from "./about";
import IntroPage from "./intro";
import Img from 'gatsby-image'
import FrequentlyAskedQuestions from "./faq";

const IndexPage = ({data}) => {
    console.log("DATA", data)

    return (
    <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>



        <IntroPage/>


        <About/>

        <FrequentlyAskedQuestions/>

        <Link to="/page-2/">Go to paeg 2</Link>



    </Layout>
)};

const styles = {
    container: {
        flexDirection: 'column',
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
        width: '100%'
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
        color: GlobalStyles.colors.applabBlue,
        backgroundColor: 'transparent',
        textDecoration: 'none',
        fontSize: '18px',
        fontFamily: GlobalStyles.headerFontStack,
        fontWeight: 500,
    },
    centered: {
        float: 'none',
        margin: '0 auto',
    }
};

export default IndexPage;

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
