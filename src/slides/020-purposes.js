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
  <Slide key="purposes" backgroundColor="backgroundColor">
    <Notes>
      <p>You can do any number of things in a service provider. But service providers provide native functionality specifically for the following things.</p>
      <hr />
      <p>The framework comes with some default service providers. Among other things they register:</p>
      <ul>
        <li>routes</li>
        <li>events</li>
        <li>authorization policies</li>
      </ul>
      <p>They run once per request before any controller, middleware, or user action takes place. Keep that in mind when writing them.</p>
    </Notes>
    <Heading>They:</Heading>
    <UnorderedList>
      <Appear elementNum={0}><ListItem color="tertiary">Register application services</ListItem></Appear>
      <Appear elementNum={1}><ListItem color="tertiary">Bind event listeners</ListItem></Appear>
      <Appear elementNum={2}><ListItem color="tertiary">Setup middleware</ListItem></Appear>
      <Appear elementNum={3}><ListItem color="tertiary">Load routes</ListItem></Appear>
      <Appear elementNum={4}><ListItem color="tertiary">Register console commands</ListItem></Appear>
      <Appear elementNum={5}><ListItem color="tertiary">And MUCH, MUCH, MORE!</ListItem></Appear>
    </UnorderedList>
  </Slide>
);
