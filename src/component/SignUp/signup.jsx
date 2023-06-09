import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import RegisterUser from './signupUtility';

function SignIn(){
    return(
        <div id="SignInMain">
        <div id="SignInPage">
        <span className='twitterLogo'><i className="fa-brands fa-twitter icon" ></i></span>
         <h1 className='SignInheading'>Sign In To Twitter</h1>

         <form id="SignInForm" onSubmit={(e)=>{RegisterUser(e)}}>
            <input type='text' className='SignInInput' placeholder=" Email"  name="signInEmail" />
            
            <input type='text' className='SignInPassword' placeholder=" UserName" name="signInUser" />
            <input type='password' className='SignInPassword' placeholder=" Password" name="signInPassword" />
            
            <button type="submit" className='SignInButton'> SignIn</button>
             <div>
             <p>Already have an account?<Link to="/login">Login</Link></p> 
            </div>
         </form>
        </div>
        </div>
    )
}

export default SignIn;