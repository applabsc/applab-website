import React, {Component} from 'react'
import {StaticQuery} from '../../.cache/gatsby-browser-entry';
import {FiChevronDown} from 'react-icons/fi';




class FrequentlyAskedQuestions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: {
                q1: {
                    questionText: "When are the meeting times?",
                    answer: "Wednesdays 8:00 to 9:30pm",
                    open: false,
                },
                q2: {
                    questionText: "What's the expected time commitment?",
                    answer: "Besides the 1.5 hours for weekly meetings, expect to put in around 2 hours outside the meeting.",
                    open: false,
                },
                q3: {
                    questionText: "Do I have to reapply every semester to remain a member of Applab?",
                    answer: "Nope! Once you get in, you can remain a member as long as you want.",
                    open: false,
                },
                q4: {
                    questionText: "Are there any costs associated with being a member of Applab?",
                    answer: "Dues are $40 per semester.",
                    open: false,
                }
            }
        }
    }


    render() {
        const questions = this.state.questions;

        return Object.keys(questions).map(key => {
            const triggerComponent =
                <FAQQuestion
                    question={questions[key].questionText}
                    opened={questions[key].open}
                />;

            return <Collapsible
                trigger={triggerComponent}
                onOpening={() => this.onTrigger(key)}
                onClosing={() => this.onTrigger(key)}
            >
                <p>{questions[key].answer}</p>
            </Collapsible>
        })
    }
}

export default FrequentlyAskedQuestions;

const styles = {
    answer: {
        backgroundColor: 'cyan',
        transition: 'height 400ms ease-in-out',
    },
    expansionPanelDetails: {
        paddingVertical: 0,
        marginVertical: 0,
    }
};
