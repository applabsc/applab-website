import React from 'react'
import MediaQuery from 'react-responsive';

import {GlobalStyles} from "../util/config";
import IndexPage from "./index";
import DescriptionColumn from "../components/description-column";

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

        <MediaQuery maxWidth={1224}>
            <div>SMOL</div>
        </MediaQuery>

        <MediaQuery minWidth={1224}>
            <div>BIG</div>
        </MediaQuery>

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
};

export default About;
