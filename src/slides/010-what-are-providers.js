import React from 'react';
import {
  Heading,
  FlexBox,
  Slide,
} from 'spectacle';

export default () => (
  <Slide key="what-are-providers" backgroundColor="tertiary" position="relative">
    <FlexBox position="relative" zIndex="1" size="100%" flexDirection="column" alignItems="center">
      <Heading margin="0px" padding="0px" fontSize="8rem">What are</Heading>
      <Heading margin="0px" padding="0px" fontSize="8rem" color="light">SERVICE</Heading>
      <Heading margin="0px" padding="0px" fontSize="6rem" color="light">PROVIDERS</Heading>
    </FlexBox>
    <FlexBox position="absolute" zIndex="0" size="100%" flexDirection="column" alignItems="center">
      <Heading margin="0px" padding="0px" fontSize="40rem" color="faded">?</Heading>
    </FlexBox>
  </Slide>
);
