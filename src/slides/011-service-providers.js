import React from 'react';
import {
  FlexBox,
  Heading,
  Slide,
} from 'spectacle';

export default () => (
  <Slide key="service-providers" backgroundColor="backgroundColor">
    <FlexBox size="100%" flexDirection="column" alignItems="center">
      <Heading fontSize="xxl" color="secondary">
        SERVICE PROVIDERS
      </Heading>
      <Heading color="tertiary" fontSize="lg">
        The glue that holds Laravel apps together
      </Heading>
    </FlexBox>
  </Slide>
);
