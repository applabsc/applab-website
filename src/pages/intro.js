import React from 'react'

import Img from 'gatsby-image'
import {graphql} from 'gatsby'
import {GlobalStyles} from "../util/config";

import Button from '../components/button';
import {StaticQuery} from "../../.cache/gatsby-browser-entry";


const IntroPage = () => (
    <StaticQuery
        query={graphql`
            query {
                applabLogo: file(relativePath: { eq: "applab-logo.png" }) {
                    ...fluidImage
                }
                appsBanner: file(relativePath: { eq: "app-store-connect.png" }) {
                    ...fluidImage
                }
            }`
        }
        render={data => (
            <div>
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
            </div>
        )}
    />
);

const styles = {
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


export default IntroPage;
