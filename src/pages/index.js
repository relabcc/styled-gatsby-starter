import React from 'react';

import Container from '../components/Container';
import Box from '../components/Box';
import Text from '../components/Text';
import BackgroundImage from '../components/BackgroundImage';
import Button from '../components/Button';

const Index = () => (
  <Container>
    <Box my="2em">
      <Text.h1>Styled Gatsby Starter</Text.h1>
      <Text>Styled Components + Styled System is cool!</Text>
    </Box>
    <BackgroundImage my="2em" src="https://loremflickr.com/1920/1080" ratio={9 / 16} />
    <Button mx="1em">Nice !</Button>
    <Button.secondary mx="1em">Good !</Button.secondary>
    <Button mx="1em" disabled>Not Good</Button>
  </Container>
);

export default Index;
