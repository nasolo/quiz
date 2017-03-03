//node modules
import React, {Component} from 'react';


export default class App extends Component {
  render() {
    return (
            <div className="app">
                HEADER
                <div className="container">
                        {this.props.children}
                </div>
                FOOTER
            </div>
    
    );
  }
}
