import './App.css';
import { useState   } from "react";
import { initializeApp } from "firebase/app";
import { getMoralisAuth } from '@moralisweb3/client-firebase-auth-utils';
import { signInWithMoralis } from '@moralisweb3/client-firebase-evm-auth';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyABjP0WGcU7Q6kQVEx5xLaS0LE2qxYrWA0",
    authDomain: "moralisappkatreena.firebaseapp.com",
    projectId: "moralisappkatreena",
    storageBucket: "moralisappkatreena.appspot.com",
    messagingSenderId: "388393713335",
    appId: "1:388393713335:web:8de36d4270f647e8afd732",
    measurementId: "G-R4L63KB0XT"
};

const app = initializeApp(firebaseConfig);
const moralisAuth = getMoralisAuth(app);
const auth = getAuth(app);

function App() {

  const [user, setUser]= useState(null);

  async function login(){

    const res = await signInWithMoralis(moralisAuth);
    setUser(res.credentials.user.uid)
  }

  async function logout(){

    await auth.signOut();
    setUser(null);
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Firebase Moralis Auth Extension 🔐
        </p>
        {!user ?
        
        <div className="searchButton" onClick={login}>Login</div>
        :
        <>
        <p>
          User:{user}
        </p>
        <div className="searchButton" onClick={logout}>Logout</div>
        </>
        }

        </header>
    </div>
  );
}

export default App;