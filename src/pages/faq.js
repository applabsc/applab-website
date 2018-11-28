import React, {Component} from 'react'
import {StaticQuery} from '../../.cache/gatsby-browser-entry';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

const questionAnswers = [
    {
        questionText: "When are the meeting times?",
        answer: "Wednesdays 8:00 to 9:30pm",
    },
    {
        questionText: "What's the expected time commitment?",
        answer: "Besides the 1.5 hours for weekly meetings, expect to put in around 2 hours outside the meeting.",
    },
    {
        questionText: "Do I have to reapply every semester to remain a member of Applab?",
        answer: "Nope! Once you get in, you can remain a member as long as you want.",
    },
    {
        questionText: "Are there any costs associated with being a member of Applab?",
        answer: "Dues are $40 per semester.",
    }
];

const renderQuestion = (question) => {
    return (
        <div className={'questionContainer'}>
            <div>{question}</div>
            <Icon className={this.state.iconClass} icon={chevronUp}/>
        </div>
    )
};

const FrequentlyAskedQuestions = () => (
    <ExpansionPanel
        children={}
    />
);

export default FrequentlyAskedQuestions;
