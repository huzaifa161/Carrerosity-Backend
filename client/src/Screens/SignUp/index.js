import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderText from '../../Components/HeaderText'
import InputWithTitle from '../../Components/InputWithTitle'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const SignUp = (props) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')



    const onSubmit = async event => {
        event.preventDefault();
        const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!fullName || !email || !password) return toast.error('Please Fill All the Fields');
        if (!email.match(emailFormat)) return toast.error('Invalid Email');
        try {
            const res = await axios.post('auth/signup', { fullName, email, password });
            if (res?.data?.statusCode === 200) {
                setFullName('');
                setEmail('');
                setPassword('');
                toast('Accout Created');
            } else if (res?.data?.statusCode === 409) toast.info('Email Already Taken..')
            else if (res?.data?.statusCode === 404) toast.error('Something went wrong..');
        
        } catch (err) {
            toast.error('Something went wrong..');
        }
    }
    return (
        <div className="login">
            <div className="login-inner">
                <div className="login_left">
                    <h1> Create a New Account</h1>
                    <p>Create a new account or</p>
                    <Link to="/">
                        <p>Login with your Existing Account</p>
                    </Link>

                </div>
                <div className="login_right">
                <form onSubmit={onSubmit}>
                <HeaderText headingLeft="Create a " headingRight="New Account"/>
                    <InputWithTitle
                        type="text"
                        required
                        title="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <InputWithTitle
                        type="email"
                        title="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputWithTitle
                        type="password"
                        title="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="login_right_button">
                        <button>
                            <Link to="/" style={{ color: 'white' }}>Already have an Account?</Link>
                        </button>
                        <button type="submit" style={{color:'white'}}>Register
                        </button>
                    </div>
                
                </form>

                </div>
            </div>
            <ToastContainer />

        </div>
    )
}
export default SignUp