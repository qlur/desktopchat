// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// let socket = io("http://localhost:3000");

// socket.emit("newMessage", "Hello there!");

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


import React from "react"
import ReactDOM from "react-dom"; 
import ChatStore from "./chatStore";

const io = require("socket.io-client");


let root = document.getElementById("root");

document.addEventListener("DOMContentLoaded", e => {
ReactDOM.render(< App />, root)
});


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
        )
    }

}



class ChatInputBar extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        message: ''
    }
    this.msgInput = React.createRef();
    this.sendMessage = this.sendMessage.bind(this);

}
sendMessage(event){
    event.preventDefault();
    this.setState({message: this.msgInput.current.value});
    ChatStore.addMessage(this.msgInput.current.value)
// console.log(`Message sent: ${this.msgInput.current.value}`)
}

render(){
    return(
<div id="chat-bar-container">
    <form id="chat-form">
        <input id="chat-input" key="0" type="text" ref={this.msgInput} placeholder="Type your message" />
        <button type="submit" id="chat-submit"  onClick={this.sendMessage} className="btn btn-success">Send Message</button>
    </form>
</div>
    )
}

}
