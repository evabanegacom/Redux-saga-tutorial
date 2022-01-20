import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { beginSignup, logOut } from '../redux/actions/auth';
import { Link } from 'react-router-dom';

const Signup:React.FC = () => {
    const dispatch = useDispatch()
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    const onChange = (e:any) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const onsubmit = (e:any) => {
        e.preventDefault();
        dispatch(beginSignup(userInfo));
        console.log('user details', userInfo);
    }

    const onLogout = () => {
        dispatch(logOut());
    }

    return (
        <div>
                  <Link to="newitem">Home</Link>

            <form style= {{display: 'flex', flexDirection: 'column'}} onSubmit={onsubmit}>
                <input onChange={onChange} type="text" placeholder="name" name='name' />
                <input onChange={onChange} type="email" placeholder="email" name='email' />
                <input onChange={onChange} type="password" placeholder="password" name='password' />
                <input onChange={onChange} type="password" placeholder="password_confirmation" name='password_confirmation' />
                <button type='submit'>SignUp</button>
            </form>
      <br />
      <br />
      <br />
      <br />

                <button onClick={onLogout} type='button'>Logout</button>
        </div>
    )
}

export default Signup;
