import React, { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();


    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                setUserName();
                setError('')
            })
            .catch(error => {
                setError('Enter valid input or user already exists');
            })
    }

    const handleRegistration = e => {
        e.preventDefault()
        registerNewUser(email, password);
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                setError('');
            })
            .catch(error => {
                console.log(error)
                setError('Wrong Username or Password');
            })
    }

    const handleLogin = e => {
        e.preventDefault()
        loginUser(email, password)
    }

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user)
    //         }
    //     })
    // })




    return { handleNameChange, handleEmailChange, handlePasswordChange, handleRegistration, handleLogin, handleLogout, signInUsingGoogle, user, email, password, error };
};

export default useFirebase;