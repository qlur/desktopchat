/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class ChatContainer extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <>
             <div id="mainarea" className="col-md-9 flex-grow-3">
                  Main Chatbox
              </div>
            </>
        )
    }
}

export default ChatContainer; 