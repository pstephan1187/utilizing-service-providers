import React from 'react';
import {
  Heading,
  Slide,
  Link
} from 'spectacle';

export default () => (
  <Slide key="thank-you" backgroundColor="tertiary">
    <Heading fontSize="16rem" color="light" margin="0px" padding="0px">
      Thank
    </Heading>
    <Heading fontSize="16rem" color="light" margin="0px" padding="0px">
      You!
    </Heading>
    <Link color="light" textAlign="center" href="http://utilizing-service-providers.patrickstephan.me" target="_blank" rel="noopener noreferrer">
      https://utilizing-service-providers.patrickstephan.me
    </Link>
  </Slide>
);
