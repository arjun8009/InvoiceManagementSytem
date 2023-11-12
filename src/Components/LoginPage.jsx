import React from "react";
import "./LoginPageCss.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function LoginPage(){
    const handleEmailChange = (event) =>{
        console.log(event.target.value)
    }
    const handlePasswordChange = (event) =>{
        console.log(event.target.value)
    }
    return(
        <div className="container">
            <div className="Form">
                <div className="header">
                    <AccountCircleIcon style={{height:"150px",width:"150px"}}/>
                </div>
                <hr></hr>
                <div className="body">
                <h1>Login</h1>
                <label className="EmailLabel">Email</label>
                <input type="email" name="Email" className="Email" onChange={(event)=>{handleEmailChange(event)}}></input>
                <br></br>
                <label className="PasswordLabel">Password</label>
                <input type="password" className="Password" onChange={(event)=>{handlePasswordChange(event)}}></input>
                </div>
                <div className="Submit-Button">
                    <hr></hr>
                    <button className="submits">Submit</button>
                </div>

            </div>
        </div>
    )
}