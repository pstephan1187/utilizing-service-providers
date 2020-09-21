import React from 'react';
import {
  CodePane,
  Heading,
  Slide,
} from 'spectacle';

const code = `
class AdminProvider extends ServiceProvider implements DeferrableProvider
{
    public function boot()
    {
        if ($this->app->runningInConsole()) {
          $this->commands([
              InitializeThemeCommand::class,
              ResetUserPassword::class,
          ]);
      }
    }
}
`;

export default () => (
  <Slide key="artisan" backgroundColor="backgroundColor">
    <Heading fontSize="xxl" color="secondary">
      Artisan Commands
    </Heading>
    <CodePane indentSize={8} autoFillHeight language="php">{code}</CodePane>
  </Slide>
);
