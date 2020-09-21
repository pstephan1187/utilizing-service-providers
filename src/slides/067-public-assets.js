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
            __DIR__.'/assets' => public_path('vendor/admin-manager'),
        ], 'public');
    }
}
`;

export default () => (
  <Slide key="public-assets" backgroundColor="backgroundColor">
    <Notes>
      That "public" argument is a publish group. It allows the end user to selectively publish groups of files. You could group your files by type (like migrations, assets, etc), or by domain (like admin, front-end, etc).
    </Notes>
    <Heading fontSize="xxl" color="secondary">
      Public Assets
    </Heading>
    <CodePane indentSize={8} autoFillHeight language="php">{code}</CodePane>
  </Slide>
);
