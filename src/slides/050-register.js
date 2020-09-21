import React from 'react';
import {
  CodePane,
  Heading,
  Notes,
  Slide,
} from 'spectacle';

const code = `
class AdminProvider extends ServiceProvider implements DeferrableProvider
{
    public function register()
    {
        $this->app->bind(Cdn::class, function ($app) {
            return new Cdn($app['config']['cdn']);
        });

        $this->app->singleton(ImageHost::class, function ($app) {
            return new ImageHost();
        });
    }
}
`;

export default () => (
  <Slide key="register" backgroundColor="backgroundColor">
    <Notes>
      The register method should be used solely for binding things to the container. The reason for this is because you do not know what services will have been registered by the time this service provider's register method is called. The register method is called on every service provider first so that all the services can be registered in the container to make sure all dependencies are resolved first.
    </Notes>
    <Heading fontSize="xxl" color="secondary">
      The Register Method
    </Heading>
    <CodePane indentSize={8} autoFillHeight language="php">{code}</CodePane>
  </Slide>
);
