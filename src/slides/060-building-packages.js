import React from 'react';
import {
  FlexBox,
  Heading,
  Notes,
  Slide,
} from 'spectacle';

export default () => (
  <Slide key="building-packages" backgroundColor="tertiary">
    <Notes>
      <p>
        Service Providers are a key part of any package, as you will need them to register all the other various parts of your package with the framework. But you are not limited to using them to just external packages. You can use them to organize your code into what I like to call "modules". Kind of like single-use packages that reside inside your app.
      </p>

      <p>I like to organize my code in such a way that all the controllers, views, models, queue jobs, artisan commands, event listeners, etc that are tied to a particular part of the application exist together. It makes it easier to find the things that I need to work on. (Examples: proposals, ecomm, pos)</p>
    </Notes>
    <Heading></Heading>
    <Heading fontSize="xxl" color="secondary" marginTop="40px">
      Building Packages
    </Heading>
    <Heading>&nbsp;</Heading>
    <Heading fontSize="xxl" color="secondary">
      Modules
    </Heading>
    <FlexBox padding="0px" margin="0px" position="absolute" zIndex={-1} size="100%" top="0px" left="0px" justifyContent="center" alignItems="center">
      <Heading fontSize="40rem" color="light" padding="0px" margin="0px">
        &amp;
      </Heading>
    </FlexBox>
  </Slide>
);
