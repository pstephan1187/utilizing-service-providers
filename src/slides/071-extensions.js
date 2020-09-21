import React from 'react';
import {
  CodePane,
  Heading,
  Notes,
  Slide,
} from 'spectacle';

const code = `
$this->app->extend(ViewFactory::class, function ($viewFactory, $app) {
    return new MyExtendedViewFactory($viewFactory);
});
`;

export default () => (
  <Slide key="extensions" backgroundColor="backgroundColor">
    <Notes>
      <p>
        The extend method allows you to wrap (or decorate) a bound container class with a custom one, giving you the ability to add (or replace) functionality to that class
      </p>

      <p>
        The resulting object should still implement the same interface though, otherwise you'll get an error when using type hinting.
      </p>

      <p>
        The problem with decorating the class like this, is that you have no ability to override protected methods or have access to protected properties. That leads us to...
      </p>
    </Notes>
    <Heading fontSize="xxl" color="secondary">
      Extensions
    </Heading>
    <CodePane indentSize={8} autoFillHeight language="php">{code}</CodePane>
  </Slide>
);
