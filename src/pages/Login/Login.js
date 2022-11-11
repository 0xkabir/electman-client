import React from 'react';
import login from './login.png'
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const Login = () => {
    const {setUser, setLoading, userLogin, loginWithProvider} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
        .then(result => {
            form.reset()
            const user = result.user;
            if(user.uid){
                setUser(user)
                navigate(from, { replace: true });
            }
            else{
                toast.error('Your email is not verified')
            }
        })
        .catch(error => {
            const message = error.message.slice(22, -2)
            toast.error(message)
        })
        .finally(setLoading(false))
    }

    const handleGoogleLogin = () => {
        const googleProvider = new GoogleAuthProvider()
        loginWithProvider(googleProvider)
        .then(result => {
            navigate(from, { replace: true });
        })
        .catch(error => console.error(error))
        .finally(setLoading(false))
    }

    const handleGithubLogin = () => {
        const githubProvider = new GithubAuthProvider()
        loginWithProvider(githubProvider)
        .then(result => {
            navigate(from, { replace: true });
        })
        .catch(error =>console.error(error))
        .finally(setLoading(false))
    }

    return (
        <div>
            <h2 className='text-2xl font-medium text-center mt-10'>Login to Your Account</h2>
            <div className='grid md:grid-cols-2 items-center'>
            <img src={login} alt="" className='lg:w-4/5 mx-auto'/>
            <div>
                <form onSubmit={handleLogin} className='mx-auto w-4/5 md:w-auto'>
                    <label htmlFor="email" className='block'>Email</label>
                    <input type="email" name="email" className='bg-gray-200 px-2 py-1.5 my-1.5 rounded w-full md:w-4/5 lg:w-2/5'/>
                    <label htmlFor="password" className='block'>Password</label>
                    <input type="password" name="password" className='bg-gray-200 px-2 py-1.5 rounded my-1.5 w-full md:w-4/5 lg:w-2/5'/>
                    <button type='submit' className='px-5 py-1.5 rounded bg-orange-600 hover:bg-orange-900 text-white font-medium block mt-3'>Login!</button>
                </form>
                <p className='mt-2 w-4/5 mx-auto md:w-auto'>New to DataLab? <Link to='/register' className='text-orange-600'>Register Now!</Link></p>
                <p className='text-center w-full md:w-4/5 lg:w-2/5 my-3'>Or, Continue with</p>
                <div className='w-full md:w-4/5 lg:w-2/5 flex justify-evenly'>
                <button onClick={handleGoogleLogin} className='flex items-center px-4 py-1.5 rounded text-orange-600 border-2 border-orange-600 hover:bg-orange-800 hover:text-white hover:font-medium'><FaGoogle className='mr-2'/> Google</button>
                <button onClick={handleGithubLogin} className='flex items-center px-4 py-1.5 rounded text-orange-600 border-2 border-orange-600 hover:bg-orange-800 hover:text-white hover:font-medium'><FaGithub className='mr-2'/> GitHub</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;