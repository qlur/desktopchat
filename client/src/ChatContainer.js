/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class ChatContainer extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
             <div id="mainarea" className="col-md-9 flex-grow-3">
                  {this.props.username} - {this.props.messages}
                  <ul>
                      <div className="messages-container-owner">

                {this.props.messages.map(
                    (messageObj, i) => {
                        if(messageObj.username === this.props.username){
                         return <li className="message" key={i}> {messageObj.msg}</li> 
                      }
                    }
                )}

                          </div>  
                  </ul>
              </div>
            </div>
        )
    }
}

export default ChatContainer; 