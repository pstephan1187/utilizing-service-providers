import React from 'react';
import {
  CodePane,
  CodeSpan,
  Heading,
  Notes,
  Slide,
  Stepper,
} from 'spectacle';

const config = `
'providers' => [
  //...
  App\\Providers\\AppServiceProvider::class,
  App\\Providers\\AuthServiceProvider::class,
  App\\Providers\\EventServiceProvider::class,
  App\\Providers\\RouteServiceProvider::class,
]
`;

const provider = `
public function register()
{
  $this->app->register(\\My\\Custom\\ServiceProvider::class)
}
`;

const discovery = `
"extra": {
    "laravel": {
        "providers": [
            "My\\Custom\\ServiceProvider"
        ]
    }
},
`;

export default () => (
  <Slide key="registration" backgroundColor="backgroundColor">
    <Notes>
      <p>There are 3 distinct ways to register your service provider with the application.</p>
      <ul>
        <li><strong>Typically in the config/app.php file.</strong> This would be for service providers that will always be loaded.</li>
        <li><strong>Dynamically from within another service provider.</strong> This would be for conditionally loading service providers. Maybe via a configuration variable, application state, environment, or some other variable.</li>
        <li><strong>Through package discovery.</strong> This only applies to service providers in importable packages. These allow the service provider to be loaded automatically instead of having to handle it manually.</li>
      </ul>
    </Notes>
    <Heading fontSize="xxl" color="secondary">
      Registration
    </Heading>
    <Stepper values={[1, 2, 3]}>
      {(value, step) => {
        switch (value) {
          case 1:
            return (
              <div>
                <Heading color="tertiary" fontSize="lg">
                  Via app configuration:
                </Heading>
                <CodeSpan color="tertiary">config/app.php</CodeSpan>
                <CodePane indentSize={8} language="php">{config}</CodePane>
              </div>
            );
          case 2:
            return (
              <div>
                <Heading color="tertiary" fontSize="lg">
                  Programmatically:
                </Heading>
                <CodeSpan color="tertiary">app/Providers/AppServiceProvider.php</CodeSpan>
                <CodePane indentSize={8} language="php">{provider}</CodePane>
              </div>
            );
          case 3:
            return (
              <div>
                <Heading color="tertiary" fontSize="lg">
                  Package discovery (As a separate package):
                </Heading>
                <CodeSpan color="tertiary">composer.json</CodeSpan>
                <CodePane indentSize={8} language="php">{discovery}</CodePane>
              </div>
            );
          default:
            return null;
        }
      }}
    </Stepper>
  </Slide>
);
