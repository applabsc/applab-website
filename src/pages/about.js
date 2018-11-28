import React from 'react'
import MediaQuery from 'react-responsive';

import code from '../images/code.png';
import idea from '../images/idea.png';
import marshall from '../images/marshall.png';
import social from '../images/social.png';

import DescriptionColumn from '../components/description-column';

const descriptionColumns = [
    {
        title: 'LEARN',
        color: '#F25C62',
        image: idea,
        paragraph: "Learn about a different topic within mobile development every semester. We'll spend the first part" +
        " of the semester learning about a topic from scratch. No prior experience required!"
    },
    {
        title: 'BUILD',
        color: '#3A506B',
        image: code,
        paragraph: "In the second half of the semester, apply the skills you've learned to build a mobile app. At the " +
        "end of the semester, showcase your app to industry partners at demo day, all while receiving plenty of support" +
        " and guidance along the way."
    },
    {
        title: 'CONNECT',
        color: '#3C3C3C',
        image: marshall,
        paragraph: "Attend tech talks throughout the semester where you'll have the chance to connect to recruiters and" +
        " learn from engineers from premier tech companies."
    },
    {
        title: 'BELONG',
        color: '#4ABBEB',
        image: social,
        paragraph: "At Applab, you'll find a supportive community of developers. Attend our various social events and " +
        "forge lasting friendships"
    },
];

const getDescriptionColumnsWide = () => (
    <div style={styles.columns}>
        {descriptionColumns.map((descriptionColumn, i) => (
            <DescriptionColumn
                key={i.toString()}
                title={descriptionColumn.title}
                color={descriptionColumn.color}
                image={descriptionColumn.image}
                paragraph={descriptionColumn.paragraph}
            />
        ))}
    </div>
);

const getDescriptionColumnsMedium = () => (
    <div style={styles.rows}>
        <div style={styles.columns}>
            {descriptionColumns.slice(0, 2).map((descriptionColumn, i) => (
                <DescriptionColumn
                    key={i.toString()}
                    title={descriptionColumn.title}
                    color={descriptionColumn.color}
                    image={descriptionColumn.image}
                    paragraph={descriptionColumn.paragraph}
                />
            ))}
        </div>

        <div style={styles.columns}>
            {descriptionColumns.slice(2, 4).map((descriptionColumn, i) => (
                <DescriptionColumn
                    key={i.toString()}
                    title={descriptionColumn.title}
                    color={descriptionColumn.color}
                    image={descriptionColumn.image}
                    paragraph={descriptionColumn.paragraph}
                />
            ))}
        </div>
    </div>
);

const getDescriptionColumnsSmol = () => (
    <div style={styles.rows}>
        {descriptionColumns.map((descriptionColumn, i) => (
            <DescriptionColumn
                key={i.toString()}
                title={descriptionColumn.title}
                color={descriptionColumn.color}
                image={descriptionColumn.image}
                paragraph={descriptionColumn.paragraph}
            />
        ))}
    </div>
);

const About = () => (
    <div>
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

        <MediaQuery maxWidth={450}>
            {getDescriptionColumnsSmol()}
        </MediaQuery>

        <MediaQuery minWidth={450} maxWidth={900}>
            {getDescriptionColumnsMedium()}
        </MediaQuery>

        <MediaQuery minWidth={900}>
            {getDescriptionColumnsWide()}
        </MediaQuery>
    </div>
);

const styles = {
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
    rows: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
};

export default About;
