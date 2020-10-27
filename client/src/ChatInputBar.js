import React from "react";
import ChatStore from "./chatStore";

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
       //this one triggers the IO FIRST
        ChatStore.addMessage(this.msgInput.current.value);

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
    
export default ChatInputBar;