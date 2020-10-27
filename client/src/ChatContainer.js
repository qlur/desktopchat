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
                  {this.props.username}
                  <ul className="messages-container-owner">

                {this.props.messages.map(
                    (messageObj, i) => {
                        if(messageObj.username === this.props.username){
                        return <li className="message" key={i}> {`You ` + messageObj.msg}</li> 
                      }
                    }
                )}

                  </ul>

                  <ul className="message-container-sender">

                  {this.props.messages.map(
                    (messageObj, i) => {
                        if(messageObj.username !== this.props.username){
                        return <li className="message" key={i}> {`${this.props.username} - ` + messageObj.msg}</li> 
                      }
                    }
                )}
                  </ul>
              </div>
            </div>
        )
    }
}

export default ChatContainer; 