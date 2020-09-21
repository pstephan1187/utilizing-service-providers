import React from 'react';
import {
  FlexBox,
  Heading,
  Slide,
} from 'spectacle';

export default () => (
  <Slide key="extending the framework" backgroundColor="tertiary">
    <Heading></Heading>
    <Heading fontSize="xxl" color="secondary" marginTop="40px">
      Extending
    </Heading>
    <Heading>&nbsp;</Heading>
    <Heading fontSize="xxl" color="secondary">
      Framework
    </Heading>
    <FlexBox padding="0px" margin="0px" position="absolute" zIndex={-1} size="100%" top="0px" left="0px" justifyContent="center" alignItems="center">
      <Heading fontSize="6rem" color="light" padding="0px" margin="0px">
        the
      </Heading>
    </FlexBox>
  </Slide>
);
