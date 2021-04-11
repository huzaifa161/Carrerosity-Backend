import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

import HeaderText from '../../Components/HeaderText'
import InputWithTitle from '../../Components/InputWithTitle'
import { ToastContainer, toast } from 'react-toastify';

import { AuthContext } from '../../App';




const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authContext = useContext(AuthContext);
    const [isDisabled,setIsDisabled] = useState(false);

    const ref = useRef();
    
    const onSubmit = async (event) => {
        event.preventDefault();
        const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!email || !password) return toast.error('Please Fill All the Fields');
        if (!email.match(emailFormat)) return toast.error('Invalid Email');

        try {
            setIsDisabled(true)
            const res = await axios.post('auth/login', { email, password });
            if (res?.data?.statusCode === 200) {
                setEmail('');
                setPassword('');
                authContext.changeAuth(res?.data?.data);
                props?.history?.push('/home');
            } else if (res?.data?.statusCode === 401) toast.error('email or password is Incorrect..');
            else if (res?.data?.statusCode === 400) toast.error('Something Went Wrong');
        } catch (err) {
            toast.error('Something Went Wrong');
        } finally {
            setIsDisabled(false);
        }
    }


    return (
        <div className="login">
            <div className="login-inner">
                <div className="login_left">
                    <h1>Login</h1>
                    <p>Login into your existing account or </p>
                    <Link to="signup"> <p>Create a New Account</p></Link>
                </div>
                <div className="login_right">
                    <form onSubmit={onSubmit}>
                    <HeaderText headingLeft="Welcome to "headingRight="Site Title"/>
                        <InputWithTitle
                            type="email"
                            title="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputWithTitle
                            type="password"
                            title="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    <div class="login_right_button">
                        <button>
                            <Link to="signup" style={{color:'white'}}>Create New Account</Link>
                        </button>
                            <button disabled={ isDisabled} type="submit" style={{color:'white'}}>Login</button>
                    </div>
                    </form>
                </div>
            </div>
            <ToastContainer ref={ref} />

        </div>
    )
}
export default Login