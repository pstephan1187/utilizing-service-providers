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
        $this->app->singleton(AdminManager::class, function ($app) {
            return new AdminManager();
        });
    }

    public function provides()
    {
        return [AdminManager::class];
    }
}
`;

export default () => (
  <Slide key="deferred-providers" backgroundColor="backgroundColor">
    <Notes>
      Deferred providers are those which are loaded only when requested. This lowers resource consuption for those requests that do not need the service. You must specify the service that it provides.
    </Notes>
    <Heading fontSize="xxl" color="secondary">
      Deferred Providers
    </Heading>
    <CodePane indentSize={8} autoFillHeight language="php">{code}</CodePane>
  </Slide>
);
