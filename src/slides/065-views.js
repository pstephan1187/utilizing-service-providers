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
        $this->loadViewsFrom(__DIR__.'/path/to/views', 'admin');

        $this->publishes([
            __DIR__.'/path/to/views' => resource_path('views/vendor/admin'),
        ]);

        $this->loadViewComponentsAs('admin', [
            UserForm::class,
            Avatar::class,
        ]);
    }
}
`;

export default () => (
  <Slide key="views" backgroundColor="backgroundColor">
    <Notes>
      You could potentially also add your view composers/creators here
    </Notes>
    <Heading fontSize="xxl" color="secondary">
      The Views
    </Heading>
    <CodePane indentSize={8} autoFillHeight language="php">{code}</CodePane>
  </Slide>
);
