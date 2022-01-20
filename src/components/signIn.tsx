import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { beginLogin, logOut } from '../redux/actions/auth';
import { useNavigate } from 'react-router-dom';

interface Props {
  text: string;
}

const SignIn:React.FC<Props> = ({text}) => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const [userInfo, setUserInfo] = useState<object | null>({
        email: '',
        password: '',
    })

    const onChange = (e:any) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const onsubmit = (e:any) => {
        e.preventDefault();
        dispatch(beginLogin(userInfo));
        console.log('user details', userInfo);
        navigate('newitem')
        
    }

    return (
        <div>
            {text}
            <form style= {{display: 'flex', flexDirection: 'column'}} onSubmit={onsubmit}>
                <input onChange={onChange} type="email" placeholder="email" name='email' />
                <input onChange={onChange} type="password" placeholder="password" name='password' />
                <button type='submit'>SignIn</button>
            </form>
        </div>
    )
}

export default SignIn;
