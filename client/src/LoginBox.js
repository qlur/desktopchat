import React from "react";
import ChatStore from "./chatStore";

class LoginBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: ''
                    }

        this.userNameInput =React.createRef();
        this.submitHandler = this.submitHandler.bind(this);
    }

   async submitHandler(event){
        event.preventDefault();
        console.log(`value by input: ${this.userNameInput.current.value}`);
        if(this.userNameInput.current.value === "") {
            alert("Please enter a valid username");
            return;
         }

         await this.setState({username : this.userNameInput.current.value});
     await  ChatStore.init(this.state.username);
     await this.props.showLoginBox();
// await alert(this.state.username)
    
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