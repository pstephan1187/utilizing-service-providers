import React from 'react';
import {
  CodePane,
  Heading,
  Slide,
  Notes,
  Stepper,
} from 'spectacle';

const code = `
class AdminProvider extends ServiceProvider implements DeferrableProvider
{
    public function register()
    {
        // Binding a concrete class as a singleton
        $this->app->singleton(MyClass::class);

        // Binding a concrete class to an interface, abstract, or sub-class
        $this->app->singleton(MyInterface::class, MyClass::class);

        // Using a closure
        $this->app->singleton(MyClass::class, function () {
            // do something

            return new MyClass($someConfigurationEtc);
        });

        // Binding an already-created instance as a singleton
        $container->instance(Container::class, $container);
    }
}
`;

const retrieving = `
$newInstance = app()->make(MyClass::class);
`;

export default () => (
  <Slide key="singletons" backgroundColor="backgroundColor">
    <Notes>
      <p>Singletons are the exact same as bindings except they return an already-created instance if it exists.</p>
    </Notes>
    <Heading fontSize="xxl" color="secondary" margin="0px">
      Singletons
    </Heading>

    <Stepper values={[1]}>
      {(value, step) => {
        switch (value) {
          default:
            return <CodePane indentSize={8} autoFillHeight language="php">{code}</CodePane>;
          case 1:
            return <CodePane indentSize={8} autoFillHeight language="php">{retrieving}</CodePane>;
        }
      }}
    </Stepper>
  </Slide>
);
