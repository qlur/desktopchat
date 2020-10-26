import React from "react";
import ChatInputBar from "./ChatInputBar";
import ChatStore from "./chatStore";
import LoginBox from "./LoginBox";


const io = require("socket.io-client");


class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {url: "http://localhost:3000"};
      this.initSocket();

      ChatStore.on("new-message", (msg)=>{
          this.io.emit("chat-message",msg)
          console.log("New message " + msg)
      });
      

      this.io.on("chat-message",msg=>{
          console.log(`Message from another user: ${msg}`);
              })
  }


  initSocket(){
      this.io = io(this.state.url);

  }


  render(){
      return(
          <div>
              <LoginBox />
          <div className="flex-parent">
          <div className="flex-container-horz flex-grow">
              <div id="side-area" className="cold-md-4 flex-grow-2">
                  Sidebar
              </div>
              <div id="mainarea" className="col-md-9 flex-grow-3">
                  Main Chatbox
              </div>
          </div>
          <ChatInputBar />
              </div>
          </div>
      )
  }

}

export default App;