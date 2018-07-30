import React from 'react';
import Link from 'gatsby-link';

import Container from '../components/Container';
import Box from '../components/Box';
import Text from '../components/Text';
import BackgroundImage from '../components/BackgroundImage';
import Button from '../components/Button';
import Counter from '../containers/Counter';
import withResponsive from '../hoc/withResponsive';

const Index = ({ browser }) => (
  <Container height="100%">
    <Box mx={[0, null, null, '3em']} py={[0, null, null, '2em']}>
      <Text.h1>Styled Gatsby Starter</Text.h1>
      <Text>Styled Components + Styled System is cool!</Text>
      <Text>Crrent Breakpoint: {browser.mediaType}</Text>
    </Box>
    <Counter m="1em" />
    <BackgroundImage my="2em" src="https://loremflickr.com/1920/1080" ratio={9 / 16} />
    <Button mx="1em" is={Link} to="/about">Go to About</Button>
    <Button.secondary mx="1em">Good Button !</Button.secondary>
    <Button mx="1em" disabled>Not Good</Button>
  </Container>
);

export default withResponsive(Index);
