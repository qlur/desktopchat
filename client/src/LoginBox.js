import React from "react";
import ChatStore from "./chatStore";

class LoginBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            test: "working"
        }
        this.userNameInput =React.createRef();
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(event){
        event.preventDefault();
        if(this.userNameInput.current.value === "") {
            alert("Please enter a valid username");
            return;
         }
        
   this.setState({username : this.userNameInput.current.value});
   this.props.showLoginBox();
   console.log(`${this.state.working}`);
      ChatStore.init(this.state.username);
        // alert(`Message sent: ${this.msgInput.current.value}`)

    
    }

    render(){
        return(
           <div className="login-box">
             <div className="login-box-container">
                <input
                ref={this.userNameInput}
            type="text"
            name="username"
            className="form-control"
            // onChange={this.handleUsernameChange.bind(this)}
            // ref={usrnameInput => (this.usrnameInput = usrnameInput)}
            placeholder="Username"
          />

            <button
              type="button"
              className="btn btn-success btn-block"
              onClick={this.submitHandler}
            //   onClick={this.handleLoginSubmit.bind(this)}
            >
              Login{" "}
            </button>
           </div>
           </div>

        );
    }


}

export default LoginBox;