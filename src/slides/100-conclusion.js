import React from 'react';
import {
  Heading,
  ListItem,
  Slide,
  UnorderedList,
} from 'spectacle';


//https://gist.github.com/davejamesmiller/bd857d9b0ac895df7604dd2e63b23afe

export default () => (
  <Slide key="boot" backgroundColor="backgroundColor">
    <Heading fontSize="xxl" color="secondary">
      Additional Reading
    </Heading>
    <UnorderedList>
      <ListItem color="tertiary">
        <a href="https://laravel.com/docs/8.x/providers" target="_blank" rel="noopener noreferrer">
          https://laravel.com/docs/8.x/providers
        </a>
      </ListItem>
      <ListItem color="tertiary">
        <a href="https://laravel.com/docs/8.x/packages#resources" target="_blank" rel="noopener noreferrer">
          https://laravel.com/docs/8.x/packages#resources
        </a>
      </ListItem>
      <ListItem color="tertiary">
        <a href="https://laravel.com/docs/8.x/container" target="_blank" rel="noopener noreferrer">
          https://laravel.com/docs/8.x/container
        </a>
      </ListItem>
      <ListItem color="tertiary">
        <a href="https://gist.github.com/davejamesmiller/bd857d9b0ac895df7604dd2e63b23afe" target="_blank" rel="noopener noreferrer">
          https://gist.github.com/davejamesmiller/bd857d9b0ac895df7604dd2e63b23afe
        </a>
      </ListItem>
    </UnorderedList>
  </Slide>
);
