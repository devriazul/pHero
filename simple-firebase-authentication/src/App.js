import logo from './logo.svg';
import './App.css';
import app from './firebase.init';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error =>{
      console.log('error',error)
    })
  }
  const handleGitHubSignIn = () =>{
    signInWithPopup(auth, gitHubProvider)
    .then(result=>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error=>{
      console.log(error);
    })
  }

  const handleSignOut = () =>{
    signOut(auth)
    .then(()=>{
      setUser({})
    })
    .catch(error=>{
      setUser({});
    })
  }

  return (
    <div className="App">

      {/* { condition ? true : false } */}

      {
        user.email ? 
        <button onClick={handleSignOut} >Sign Out</button> :
        <>
          <button onClick={handleGoogleSignIn}>Google sign in</button>
          <button onClick={handleGitHubSignIn}>Github Sign In</button>
        </>
      }

      <h2>Name: {user.displayName}</h2>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
