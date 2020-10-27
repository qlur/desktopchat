import React from "react";
import ChatInputBar from "./ChatInputBar";
import ChatStore from "./chatStore";
import LoginBox from "./LoginBox";
import ChatContainer from "./ChatContainer";

const io = require("socket.io-client");


class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          url: "http://localhost:3000",
          showLoginBox: true, 
          messages: [],
          username: ''
    };
      this.initSocket();
      this.showLoginBox = this.showLoginBox.bind(this);


      ChatStore.on("initialized", (username)=>{
          this.setState({username: username});
          console.log(`Username from App.js:  ${this.state.username}`)

      })

      ChatStore.on("new-message", (msg)=>{
          //this one sents to server via IO emit
          //this one save the message
          let newMsg = {msg: msg, username: ChatStore.getUsername()};
          this.setState((prevState)=>({messages: [...prevState.messages, newMsg]}));
          this.io.emit("receiving-message",msg)
          console.log("New message sent: " + msg)
      });
      
      
//Message from another user
      this.io.on("receiving-message",msg=>{
          let newMsg = {msg: msg}
   this.setState((prevState)=>({messages: [...prevState.messages, msg]})); //not sure about
 console.log("New message sent from another User: " + msg)

  });

  }

  showLoginBox(){
    this.setState({showLoginBox : false});
}


  initSocket(){
      this.io = io(this.state.url);

  }



  render(){
      return(
          <div>
           {this.state.showLoginBox &&  <LoginBox showLoginBox = {this.showLoginBox} />}
          <div className="flex-parent">
          <div className="flex-container-horz flex-grow">
              <div id="side-area" className="cold-md-4 flex-grow-2">
                  Sidebar
              </div>
             <ChatContainer messages={this.state.messages} username={this.state.username} />
          </div>
          <ChatInputBar />
              </div>
          </div>
      )
  }

}

export default App;