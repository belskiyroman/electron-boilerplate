import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div>
              <h1 id="greet"></h1>
              <p>
                Welcome to <a href="http://electron.atom.io" class="js-external-link">Electron</a> app running on this <strong id="os"></strong> machine.
              </p>
              <p>
                App author: <strong id="author"></strong>
              </p>
              <p>
                Environment: <strong id="env"></strong>
              </p>
              <p>
                Electron version: <strong id="electron-version"></strong>
              </p>
            </div>);
    }
}
