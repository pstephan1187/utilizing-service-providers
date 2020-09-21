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
        // Binding a concrete class to an interface, abstract, or sub-class
        $this->app->bind(MyInterface::class, MyClass::class);

        // Using a closure
        $this->app->bind(MyClass::class, function () {
            // do something

            return new MyClass($someConfigurationEtc);
        });
    }
}
`;

const retrieving = `
$instance = app(MyInterface::class);
$instance = $app[MyInterface::class];
`;

export default () => (
  <Slide key="binding" backgroundColor="backgroundColor">
    <Notes>
      <p>When you bind a class to the container, everytime you retrieve it, you create a new instance of that class (or invoke the given callback again).</p>
    </Notes>
    <Heading fontSize="xxl" color="secondary">
      Binding
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
