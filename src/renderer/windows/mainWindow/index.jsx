import '../../styles/main.css';

// Small helpers you might want to keep
import '../../../helpers/context_menu.js';
import '../../../helpers/external_links.js';

// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------

import { remote } from 'electron';
import jetpack from 'fs-jetpack';
import { greet } from '../../../servises/hello_world';
import env from 'env';

const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// files from disk like it's node.js! Welcome to Electron world :)
const manifest = appDir.read('package.json', 'json');

const osMap = {
  win32: 'Windows',
  darwin: 'macOS',
  linux: 'Linux'
};

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App.jsx';

const params = {
  app: 'block',
  greet: greet(),
  os: osMap[process.platform],
  author: manifest.author,
  env: env.name,
  electronVersion: process.versions.electron,
};

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

ReactDOM.render(<App {...params}/>, root);
