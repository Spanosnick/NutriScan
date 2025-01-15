import '../components/LoginForm/LoginForm.css'
import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {isLoggedIn,userActions} from "../features/user/userSlice";
import {useNavigate, useNavigation} from "react-router-dom";



export default function Login(props) {
    const [ dynamicActive,setDynamicActive ] = useState({loginBtn:'active',registerBtn:''});
    const loginEmail = useRef();
    const loginPassword = useRef();
    const isLogged = useSelector(isLoggedIn);
    const user_dispatch = useDispatch();
    const navigation = useNavigate();



    function toogleActive(){
        if(dynamicActive.loginBtn === 'active'){
            setDynamicActive({loginBtn:'',registerBtn:'active'});
        }else{
            setDynamicActive({loginBtn:'active',registerBtn:''});
        }
    }

    function loginFormSubmit(e){
        e.preventDefault();
        console.log('login form submitted');
        const email = loginEmail.current.value;
        const password = loginPassword.current.value;
        // 1) Check if is empty and if is its email and then send it
            user_dispatch(userActions.login({email:email,password:password}));
            setTimeout(()=>{
                navigation('/app');
            },1500)

        // 2) If authorized redirect to dashboard else show error message

    }

    return (
        <section className='loginSection'>
            <h1 className='nutriScanTitle'>Nutri<span>Scan</span></h1>
            <div className='loginForm'>
                {/*<div className="toggle-buttons">*/}
                {/*    <button id="loginBtn" onClick={toogleActive} className={dynamicActive.loginBtn}>Login</button>*/}
                {/*    <button id="registerBtn" onClick={toogleActive} className={dynamicActive.registerBtn}>Register*/}
                {/*    </button>*/}
                {/*</div>*/}
                <form id="loginForm" className={dynamicActive.loginBtn}>
                    <h2>Login</h2>
                    <input type="text" placeholder="Email" ref={loginEmail}/>
                    <input type="password" placeholder="Password" ref={loginPassword}/>
                    <div className='error-message'></div>
                    <button className='loginBtn' onClick={loginFormSubmit} type="submit">Login</button>
                </form>
                <form id="registerForm" className={dynamicActive.registerBtn}>
                    <h2>Register</h2>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Password Confirm"/>
                    <button className='registerBtn' type="submit">Register</button>
                </form>
            </div>
        </section>
    );
}
