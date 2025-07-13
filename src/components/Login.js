import { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null)

    const toggleHandleForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    const handleForm = () => {
        
       const message =  checkValidData(email.current.value, password.current.value, isSignInForm ? "Full Name" : fullName.current.value)
       console.log(message)
    }
    return (
        <div className='relative'>
            <Header/>
            <form onSubmit={(e) => {e.preventDefault()}} className='w-3/12 absolute top-24 left-[40%] bg-black bg-opacity-60 p-6 rounded-lg text-white'>
                <h1 className='text-3xl'>{isSignInForm ? "Sign In": "Sign Up"}</h1> 
                {!isSignInForm && 
                <input 
                    ref={fullName}
                    className='p-2 my-4 w-full  text-gray-600' 
                    type='text' 
                    placeholder='Full Name'
                />
                }
                <input 
                    ref={email}
                    className='p-2 my-4 w-full  text-gray-600' 
                    type='text' 
                    placeholder='Email Address'
                />
                <input 
                    ref={password}
                    className='p-2 my-4 w-full text-gray-600' 
                    type='password' 
                    placeholder='Password'/>
                <button onClick={handleForm} className='p-2 my-4 w-full bg-red-700 rounded-lg'>
                    
                    {isSignInForm? "Sign In": "Sign Up"}
                </button>
                <p className='text-sm cursor-pointer' onClick={toggleHandleForm}>
                    {isSignInForm? "New User! Sign Up" : "Already User! Sign In"}
                </p>  
            </form>
            <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_small.jpg'
            alt = 'banner'/>  
            
        </div>
    )
}
export default Login