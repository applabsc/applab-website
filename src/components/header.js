import React, {Component} from 'react'
import { Link } from 'gatsby'

class Header extends Component {

    render() {
        return (
            <div style={styles.stickyHeader}>
                <div style={styles.title}>
                    <h1>Applab USC</h1>
                </div>

                <div style={styles.links}>
                    <Link to="/" style={styles.link}>
                        Link 1
                    </Link>

                    <Link to="/" style={styles.link}>
                        Link 2
                    </Link>

                    <Link to="/" style={styles.link}>
                        Link 3
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
        backgroundColor: 'aliceblue',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    title: {
        display: 'flex',
        marginLeft: 20,
        marginRight: 20,
    },
    links: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: 'magenta'
    },
    link: {
        color: 'black',
        textDecoration: 'none',
    },
};

export default Header;
