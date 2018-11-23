import React, {Component} from 'react';
import Img from "gatsby-image"


class Intro extends Component {

    render() {
        console.log("THisProps", this.props);
        return null;
    }
}

export const query = graphql`
    query {
        backgroundImage: file(relativePath: { eq: "app-store-connect.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

export default Intro;
