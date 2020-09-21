import React from 'react';
import {
  CodePane,
  CodeSpan,
  Heading,
  Slide,
  Stepper,
} from 'spectacle';

const command = `
php artisan make:provider MyCustomProvider
`;

const file = `
<?php

namespace App\\Providers;

use Illuminate\\Support\\ServiceProvider;

class MyCustomProvider extends ServiceProvider
{
  //...
}
`;

export default () => (
  <Slide key="making-providers" backgroundColor="backgroundColor">
    <Heading fontSize="xxl" color="secondary" margin="0px" padding="0px">
      Making Providers
    </Heading>
    <Stepper values={[1, 2]}>
      {(value, step) => {
        switch (value) {
          case 1:
            return (
              <div>
                <Heading color="tertiary" fontSize="lg">
                  Via Artisan:
                </Heading>
                <CodeSpan color="tertiary">Command Line:</CodeSpan>
                <CodePane indentSize={8} language="bash">{command}</CodePane>
              </div>
            );
          case 2:
            return (
              <>
                <Heading color="tertiary" fontSize="lg">
                  Manually:
                </Heading>
                <CodeSpan color="tertiary">app/Providers/CustomProvider.php</CodeSpan>
                <CodePane indentSize={8} autoFillHeight language="php">{file}</CodePane>
              </>
            );
          default:
            return null;
        }
      }}
    </Stepper>
  </Slide>
);
