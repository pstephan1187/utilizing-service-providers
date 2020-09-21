import React from 'react';
import {
  Appear,
  Heading,
  ListItem,
  Notes,
  Slide,
  UnorderedList,
} from 'spectacle';

export default () => (
  <Slide key="why-use" backgroundColor="backgroundColor">
    <Notes>
      <p>Beyond those things, service providers are also useful for these purposes.</p>
      <hr/>
      <p>I use service providers a lot to organize my code into "modules". These are a lot like packages in that I organize related things together, but different in that they are not intended to be distributed or shared with others.</p>
    </Notes>
    <Heading>Why use them?</Heading>
    <UnorderedList>
      <Appear elementNum={0}><ListItem color="tertiary">Bind things to the container</ListItem></Appear>
      <Appear elementNum={1}><ListItem color="tertiary">Register system services</ListItem></Appear>
      <Appear elementNum={2}><ListItem color="tertiary">Override or extend framework classes</ListItem></Appear>
      <Appear elementNum={3}><ListItem color="tertiary">Consolidate related logic into "modules"</ListItem></Appear>
      <Appear elementNum={4}><ListItem color="tertiary">Provide a way to register your package with the framework</ListItem></Appear>
      <Appear elementNum={5}><ListItem color="tertiary">And MUCH, MUCH, MORE!</ListItem></Appear>
    </UnorderedList>
  </Slide>
);
