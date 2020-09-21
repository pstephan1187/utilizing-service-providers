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
        $this->publishes([
            __DIR__.'/config/admin.php' => config_path('config.php'),
        ]);

        $this->mergeConfigFrom(
            __DIR__.'/config/admin.php', 'admin'
        );
    }
}
`;

export default () => (
  <Slide key="config" backgroundColor="backgroundColor">
    <Notes>
      <p>
        By default, Laravel will open all config files in the config directory and associate them by their filename. But if you want to load a default config file, you have to tell Laravel about it. Hence the mergeFromConfig method.
      </p>

      <p>
        You do not HAVE to use a config file from the config directory either. You could just have the config file that you define in your package, and only load that. HOWEVER, if a user manually adds a config file with the same filename as your config key, they will be able to overwrite your default values.
      </p>
    </Notes>
    <Heading fontSize="xxl" color="secondary">
      Configuration Files
    </Heading>
    <CodePane indentSize={8} autoFillHeight language="php">{code}</CodePane>
  </Slide>
);
