export const pages = {
    home: "home"
}


export const GlobalStyles = {
    headerFontStack: "Avenir Next, Helvetica, Arial, sans-serif",
    fontStack: "Helvetica, Arial, sans-serif",
    colors: {
        applabBlue: '#00D2FF'
    }
};

export const fixedImage = graphql`
fragment fixedImage on File {
    childImageSharp {
        fixed {
            ...GatsbyImageSharpFixed_noBase64
        }
    }
}`;

export const fluidImage = graphql`
fragment fluidImage on File {
    childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid_noBase64
        }
    }
}`;
