// Node modules import
import React, {Component} from 'react';

//Components import
import ActivityLog from './main/activity-log';
// Main Page



export default class Main extends Component{

    render(){
        return (
            <div className="main-page">
               <ActivityLog />
            </div>
        )
    }

}
