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
        $this->loadRoutesFrom(__DIR__.'/routes.php');
    }
}
`;

export default () => (
  <Slide key="routes" backgroundColor="backgroundColor">
    <Notes>
      <p>This method essentially just checks to see if the routes are cached and if they aren't, it loads the file.</p>

      <p>If you are having issues with your routes not loading, run the artisan 'route:clear' command to clear your route cache. Then Laravel will load the file.</p>
    </Notes>
    <Heading fontSize="xxl" color="secondary">
      Registering Routes
    </Heading>
    <CodePane indentSize={8} autoFillHeight language="php">{code}</CodePane>
  </Slide>
);
