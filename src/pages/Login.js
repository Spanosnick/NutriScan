import '../components/LoginForm/LoginForm.css'
import React, { useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";
import { signInWithPopup } from "firebase/auth";
import {auth, googleAuthProvider} from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

export default function Login(props) {
    const [ dynamicActive,setDynamicActive ] = useState({loginBtn:'',registerBtn:'active'});
    const [error, setError] = useState('');
    // Refs for the inputs
    const loginEmail = useRef();
    const loginPassword = useRef();
    const registerEmail = useRef();
    const registerPassword = useRef();
    const registerPasswordConfirm = useRef();




    const { signup,login } = useAuth();
    const navigation = useNavigate();
    let [loading, setLoading] = useState(false);

    function toogleActive(){
        if(dynamicActive.loginBtn === 'active'){
            setDynamicActive({loginBtn:'',registerBtn:'active'});
        }else{
            setDynamicActive({loginBtn:'active',registerBtn:''});
        }
    }

    async function loginFormSubmit(e) {
        e.preventDefault();
        const email = loginEmail.current.value;
        const password = loginPassword.current.value;
        try {
            setError('');
            setLoading(true);
            await login(email, password);
            navigation('/app');
        }catch (e) {
            setError('Failed to login. Please check your email and password');
        }
        setLoading(false);
    }

    async function loginWithGoogle(e) {
        e.preventDefault();
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);

            onAuthStateChanged(auth, (user) => {
                if (user) {
                    navigation('/app');
                } else {
                    console.log("No user signed in");
                }
            });

        } catch (error) {
            console.error("Error signing in:", error);
        }
    }

    async function registerFormSubmit(e) {
        e.preventDefault();
        console.log('register form submitted');
        const email = registerEmail.current.value;
        const password = registerPassword.current.value;
        const passwordConfirm = registerPasswordConfirm.current.value;
        if(password !== passwordConfirm){
            console.log('Passwords do not match');
          return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password);
        }catch (e) {
            setError('Failed to create an account');
        }
        setLoading(false);

    }




    return (
        <section className='loginSection'>
            <h1 className='nutriScanTitle'>Nutri<span>Scan</span></h1>
            <div className='loginForm'>
                <div className="toggle-buttons">
                    <button id="loginBtn" onClick={toogleActive} className={dynamicActive.loginBtn}>Login</button>
                    <button id="registerBtn" onClick={toogleActive} className={dynamicActive.registerBtn}>Register
                    </button>
                </div>
                <form id="loginForm" onSubmit={loginFormSubmit} className={dynamicActive.loginBtn}>
                    <h2>Login</h2>
                    <input type="text" placeholder="Email" ref={loginEmail}/>
                    <input type="password" placeholder="Password" ref={loginPassword}/>
                    <div className='error-message'></div>
                    <button className='loginBtn' disabled={loading}  type="submit">Login</button>
                    <button className='google-button'  onClick={loginWithGoogle}  type="submit"> <FcGoogle className='googleIcon' />   <p> Login With Google</p> </button>
                </form>
                <form id="registerForm" onSubmit={registerFormSubmit} className={dynamicActive.registerBtn}>
                    <h2>Register</h2>
                    <input type="email" placeholder="Email" required={true} ref={registerEmail}/>
                    <input type="password" placeholder="Password" ref={registerPassword}/>
                    <input type="password" placeholder="Password Confirm" ref={registerPasswordConfirm}/>
                    <button className='registerBtn' disabled={loading} type="submit">Register</button>
                    <button className='google-button' onClick={loginWithGoogle} type="submit"><FcGoogle
                        className='googleIcon'/>   <p> Register With Google</p></button>
                </form>
                {error && <div className='error-message'>{error}</div>}
            </div>
        </section>
    );
}
