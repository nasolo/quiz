//node modules
import React, {Component} from 'react';

//Component

import Header from './header'
export default class App extends Component {
  render() {
    return (
            <div className="app">
                <Header />
                <div className="container">
                        {this.props.children}
                </div>
                FOOTER
            </div>
    
    );
  }
}
