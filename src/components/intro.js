import React, {Component} from 'react';
import Img from "gatsby-image"


class Intro extends Component {

    render() {
        console.log("THisProps", this.props);
        return (
            <Img fixed={this.props.data.backgroundImage.childImageSharp.fluid} />
        )
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
