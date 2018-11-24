import React, {Component} from 'react'
import {Link} from 'gatsby'
import {GlobalStyles} from '../util/config';

class Header extends Component {

    constructor(props) {
        super(props);

        this.links = [
            {
                linkText: "Home",
                url: "/"
            },
            {
                linkText: "About Us",
                url: "/"
            },
            {
                linkText: "Semester Timeline",
                url: "/"
            },
            {
                linkText: "Mailing List",
                url: "http://eepurl.com/dEDGcH"
            },
            {
                linkText: "Contact Us",
                url: "/"
            }
        ]
    }

    getHeaderLinks = () => (
        this.links.map((linkInfo, i) =>
            <Link to={linkInfo.url} style={styles.link} key={i.toString()}>
                {linkInfo.linkText}
            </Link>
        )
    );

    render() {
        return (
            <div style={styles.stickyHeader}>

                <div style={{...styles.title, ...styles.titleText}}>
                    Applab USC
                </div>

                <div style={styles.links}>
                    <Link to="/" style={styles.link}>
                        Home
                    </Link>

                    <Link to="/" style={styles.link}>
                        About Us
                    </Link>

                    <Link to="/" style={styles.link}>
                        Sponsors
                    </Link>

                    <a href="http://eepurl.com/dEDGcH" target="_blank" style={styles.link}>
                        Mailing List
                    </a>

                    <Link to="/" style={styles.link}>
                        Contact Us
                    </Link>
                </div>
            </div>
        )
    }
}

const styles = {
    stickyHeader: {
        position: '-webkit-sticky', /* Safari */
        position: 'sticky',
        top: 0,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'green',
        height: 75
,    },
    title: {
        display: 'flex',
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'aliceblue',

    },
    titleText: {
        fontSize: 42,
        fontWeight: 600,
        fontFamily: GlobalStyles.headerFontStack
    },
    links: {
        display: 'flex',
        flex: 2,
        justifyContent: 'space-evenly',
        backgroundColor: 'magenta'
    },
    link: {
        color: 'black',
        textDecoration: 'none',
    },
};

export default Header;
