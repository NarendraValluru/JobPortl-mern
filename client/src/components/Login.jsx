import React from 'react';
import { getAuth ,GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const handleLogin = () => {
        signInWithPopup(auth, googleProvider).then((result) => {
            
            const user = result.user;
            console.log(user)
          }).catch((error) => {
            
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }

  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <button className='bg-blue text-white px-8 py-2' onClick={handleLogin}>Login</button>
    </div>
    
  );
}

export default Login;
