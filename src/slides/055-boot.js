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
    public function boot()
    {
        $this->loadRoutesFrom(__DIR__.'/admin/resources/views/routes.php');

        if ($this->app->runningInConsole()) {
            $this->commands([
                PurgeInactiveUsers::class,
                GenerateReport::class,
            ]);
        }
    }
}
`;

export default () => (
  <Slide key="boot" backgroundColor="backgroundColor">
    <Notes>
      <p>
        Called the "boot" method because it runs when the app boots.
      </p>

      <p>
        This is where you register any services that this provider provides and any additional logic. All providers will have been registered by this point so all dependencies should be resolvable.
      </p>

      <p>
        Since this is all code, you can dynamically control all of these. They can be set based on values in a config file, entries in a database, calls to an API endpoint, session data, etc.
      </p>
    </Notes>
    <Heading fontSize="xxl" color="secondary">
      The Boot Method
    </Heading>
    <CodePane indentSize={8} autoFillHeight language="php">{code}</CodePane>
  </Slide>
);
