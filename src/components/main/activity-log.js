//import node modules

import React, {Component} from 'react';


//Renders data about user activity
export default class ActivityLog extends Component{
    render(){
        return(
            <div className="activity-log">
                <div className="row">
                    <div className="col-md-6">
                        <div className="correct-answers">
                            Correct Answers: 0
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="total-questions">
                            Total Questions: 0
                        </div>
                    </div>
                </div>
            </div>

        )

    }

}
