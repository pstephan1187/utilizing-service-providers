import React from 'react';
import {
  CodePane,
  Heading,
  Notes,
  Slide,
} from 'spectacle';

const code = `
public function register()
{
    $this->app->singleton(Dispatcher::class, function ($app) {
        return new CustomerDispatcher($app, function () {
            //...
        });
    });

    $this->app->bind('db.connection', function ($app) {
        //...
    });
}
`;

export default () => (
  <Slide key="replacing-framework-classes" backgroundColor="backgroundColor">
    <Notes>
      <p>We are going to get into binding and singletons here in a moment, but the key takeaway here is that anything that is bound in the container can be re-bound.</p>
      <p>You can replace any service that is bound to the container by simply binding it again.</p>
      <p>This only works on classes in the container. And you want to be careful to only do it before your middleware or controllers are invoked. Otherwise you can have unexpected results that may be hard to debug.</p>
      <p>And that brings us to...</p>
    </Notes>
    <Heading fontSize="xxl" color="secondary">
      Replacing framework classes
    </Heading>
    <CodePane indentSize={8} autoFillHeight language="php">{code}</CodePane>
  </Slide>
);
