export const pages = {
    home: "home"
}


export const GlobalStyles = {
    headerFontStack: "Avenir Next, Helvetica, Arial, sans-serif",
    fontStack: "Helvetica, Arial, sans-serif",
};

export const fluidImage = graphql`
fragment fluidImage on File {
    childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
    }
}`;
