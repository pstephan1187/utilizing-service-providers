import React from 'react';
import {
  CodePane,
  Heading,
  Notes,
  Slide,
} from 'spectacle';

const code = `
app/
  Modules/
    Admin/
      Commands/
      Controllers/
      Events/
      Jobs/
      Models/
      views/
      AdminServiceProvider.php
      AdminFacade.php
      AdminManager.php
      routes.php
    Blog/
    Core/
    EComm/
`;

export default () => (
  <Slide key="folder-structure" backgroundColor="backgroundColor">
    <Notes>
      <ul>
        <li>Break up the various types of classes into folders</li>
        <li>Have the SP, Facade, and core services in module's root directory</li>
        <li>Notice that 'views' is lower case. It includes blade files, not classes. Matches the capitalization of the framework</li>
        <li>Sometimes I will have a Core 'module' to store pieces that are required by everything. This is a good spot for things like users</li>
      </ul>
    </Notes>
    <Heading fontSize="xxl" color="secondary">
      Module Folder Structure
    </Heading>
    <CodePane indentSize={8} autoFillHeight language="php">{code}</CodePane>
  </Slide>
);
