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
    public function boot(AnotherBoundClass $otherClassInstance)
    {
        $otherClassInstance->doSomething();

        $this->app->bind(MyCustom::class, function ($app) {
            return new MyCustom($otherClassInstance);
        });
    }
}
`;

export default () => (
  <Slide key="dependency-injection" backgroundColor="backgroundColor">
    <Notes>
      <p>If your service provider needs access to any other service that is bound to the container, you can type-hint that class in your boot method to resolve it from the container.</p>
    </Notes>
    <Heading fontSize="xxl" color="secondary">
      Dependency Injection
    </Heading>
    <CodePane indentSize={8} autoFillHeight language="php">{code}</CodePane>
  </Slide>
);
