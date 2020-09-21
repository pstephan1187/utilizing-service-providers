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
        $this->loadTranslationsFrom(__DIR__.'/translations', 'admin-manager');
    }
}
`;

export default () => (
  <Slide key="translations" backgroundColor="backgroundColor">
    <Heading fontSize="xxl" color="secondary">
      Registering Translation Files
    </Heading>
    <CodePane indentSize={8} autoFillHeight language="php">{code}</CodePane>
  </Slide>
);
