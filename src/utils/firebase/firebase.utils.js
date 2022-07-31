import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA2exRSIUPdvfQcEgP_MTDDD5jQqPlRxwY",
    authDomain: "dd-crown-clothing.firebaseapp.com",
    projectId: "dd-crown-clothing",
    storageBucket: "dd-crown-clothing.appspot.com",
    messagingSenderId: "212742338080",
    appId: "1:212742338080:web:da88b9110960f007d8ae45"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);