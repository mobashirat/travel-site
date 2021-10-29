import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import bgimg from '../bannerimg/logbg.jpg';
import './Login.css'



const Login = () => {
    const { signInWithGoogle } = useAuth()
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home'
    const history = useHistory()

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div>

            <div className="bg">
                <h2 className="mt-0 mb-4 text-danger">Please Login</h2>
                <form>
                    <input type="email" name="email" id="" placeholder="enter your email" /><br /><br />
                    <input type="password" name="" id="" placeholder="enter your password" /><br /><br />
                    <input className="btn-dark" type="submit" value="Submit" />
                </form>
                <br />
                <p>new user?<Link to="/register"><span className="account">Create Account</span></Link></p>
                <br />
                <button onClick={handleGoogleLogin} className="btn-dark mb-4">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;