import React from 'react';

export class App extends React.Component {
    render() {
        return (
            <div>
              <h1 id="greet">{this.props.greet}</h1>
              <p>
                Welcome to <a href="http://electron.atom.io" className="js-external-link">Electron</a> app running on this <strong id="os">{this.props.os}</strong> machine.
              </p>
              <p>
                App author: <strong id="author">{this.props.author}</strong>
              </p>
              <p>
                Environment: <strong id="env">{this.props.env}</strong>
              </p>
              <p>
                Electron version: <strong id="electron-version">{this.props.electronVersion}</strong>
              </p>
            </div>
        );
    }
}
