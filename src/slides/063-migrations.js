import React from 'react';
import {
  CodePane,
  Heading,
  Notes,
  Slide,
  Stepper,
} from 'spectacle';

const code = `
class AdminProvider extends ServiceProvider implements DeferrableProvider
{
    public function boot()
    {
        $this->loadMigrationsFrom(__DIR__.'/path/to/migrations');

        $migration = '2020_09_21_100000_create_custom_table.php';
        $this->publishes([
            __DIR__.'/migrations/'.$migration => database_path('migrations/'.$migration),
        ]);
    }
}
`;

const disable = `
public function boot()
{
    app(AdminManager::class)->disableMigrations();
}
`;

export default () => (
  <Slide key="migrations" backgroundColor="backgroundColor">
    <Notes>
      If you are building a package, be careful to allow someone to opt out of this. You should allow the end user to disable the migrations via some kind of configuration, like a config file, or progamatically (app('myService')->disableMigrations();). You could also, disable the migrations by default and utilize the publish directive, to allow the end user to opt in by publishing the migrations to their migrations directory.
    </Notes>
    <Heading fontSize="xxl" color="secondary">
      Applying Migrations
    </Heading>
    <Stepper values={[1]}>
      {(value, step) => {
        switch (value) {
          default:
            return <CodePane indentSize={8} autoFillHeight language="php">{code}</CodePane>;
          case 1:
            return <CodePane indentSize={8} autoFillHeight language="php">{disable}</CodePane>;
        }
      }}
    </Stepper>
  </Slide>
);
