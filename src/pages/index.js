import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import About from "./about";
import IntroPage from "./intro";
import FrequentlyAskedQuestions from "./faq";

const IndexPage = ({data}) => (
    <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>



        <IntroPage/>


        <About/>

        <FrequentlyAskedQuestions/>

        <Link to="/page-2/">Go to paeg 2</Link>


    </Layout>
);

export default IndexPage;
