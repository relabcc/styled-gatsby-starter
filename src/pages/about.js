import React from 'react';
import GatsbyLink from 'gatsby-link';

import Container from '../components/Container';
import Link from '../components/Link';
import Counter from '../containers/Counter';

const AboutPage = () => (
  <Container>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Counter m="2em" />
    <Link is={GatsbyLink} to="/">Go back to the homepage</Link>
  </Container>
);

export default AboutPage;
