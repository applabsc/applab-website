import React, {Component} from 'react'
import { Link } from 'gatsby'

import React, {Component} from 'react';
import "../Styles/Header.scss";

class Header extends Component {

    render() {
        return (
            <div className={"sticky-header"}>
                <div className={'title'}>
                    <h1>Applab USC</h1>
                </div>

                <div className={'links'}>
                    <div style={styles.headerItem}>
                        <Link to="/" style={styles.link}>
                            Link 1
                        </Link>
                    </div>

                    <div style={styles.headerItem}>
                        <Link to="/" style={styles.link}>
                            Link 2
                        </Link>
                    </div>

                    <div style={styles.headerItem}>
                        <Link to="/" style={styles.link}>
                            Link 3
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    headerItem: {
        display: 'flex',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    },
};

export default Header;
