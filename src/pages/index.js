import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'
import {GlobalStyles} from "../util/config";
import Button from "../components/button";
import DescriptionColumn from '../components/description-column';

const IndexPage = ({data}) => (
    <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>

        <div style={styles.applabLogo}>
            <Img
                fluid={data.applabLogo.childImageSharp.fluid}
            />
        </div>

        <p style={{...styles.subtitleText, ...styles.centered}}>
            Learn how to build mobile apps using the latest technologies,
            build real world projects and meet awesome peers.
        </p>

        <Button
            style={{...styles.applyButton, ...styles.centered}}
            href="https://www.typeform.com/"
            shouldOpenInNewTab={true}
            buttonText={'Apply here'}
        />

        <div style={styles.bannerImage}>
            <Img
                fluid={data.appsBanner.childImageSharp.fluid}
            />
        </div>


        <h1>
            About Us
        </h1>

        <p style={styles.clubSummary}>
            Applab is a community of passionate mobile developers—
            although no prior experience is necessary to join.
        </p>

        <p style={styles.clubSummary}>
            Learn through a carefully curated curriculum that
            teaches you fundamentals of a mobile development platform.
            Afterwards, build a real world app. Either start something
            from scratch or build something for industry/non-profit
            client of ours.
        </p>

        <p style={styles.clubSummary}>
            Every semester we’ll learn about a different topic
            within mobile development. This semester, we’re
            starting off with React Native but future planned
            topics include iOS, Android and Flutter.
        </p>

        <div style={styles.columns}>
            <DescriptionColumn
                title={'LEARN'}
                color={'#F25C62'}
                image={"https://s3-us-west-1.amazonaws.com/applab-sc/idea.png"}
                paragraph={"Learn about a different topic within mobile development every semester. We'll spend the first part of the semester learning about a topic from scratch. No prior experience required! "}
            />
            <DescriptionColumn
                title={'BUILD'}
                color={'#3A506B'}
                image={"https://s3-us-west-1.amazonaws.com/applab-sc/code.png"}
                paragraph={"In the second half of the semester, apply the skills you've learned to build a mobile app. At the end of the semester, showcase your app to industry partners at demo day, all while receiving plenty of support and guidance along the way."}
            />
            <DescriptionColumn
                title={'CONNECT'}
                color={'#3C3C3C'}
                image={"https://s3-us-west-1.amazonaws.com/applab-sc/marshall.png"}
                paragraph={"Attend tech talks throughout the semester where you'll have the chance to connect to recruiters and learn from \n" +
                "engineers from premier tech companies."}
            />
            <DescriptionColumn
                title={'BELONG'}
                color={'#4ABBEB'}
                image={"https://s3-us-west-1.amazonaws.com/applab-sc/social.png"}
                paragraph={"One of the core principles we're built on is community. At Applab, you'll find a supportive community of developers. Attend our various social events and forge lasting friendships."}
            />
        </div>

        <Link to="/page-2/">Go to paeg 2</Link>



    </Layout>
);

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
    clubSummary: {
        maxWidth: '50%',
        paddingBottom: '20px',
        textAlign: 'left',
    },
    columns: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
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
