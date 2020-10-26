import React from "react";

class LoginBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }

    }

    render(){
        return(
           <div className="login-box">
             <div className="login-box-container">
                <input
            type="text"
            name="registerUsername"
            className="form-control"
            // onChange={this.handleUsernameChange.bind(this)}
            // ref={usrnameInput => (this.usrnameInput = usrnameInput)}
            // placeholder="Username"
          />

            <button
              type="button"
              className="btn btn-success btn-block"
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