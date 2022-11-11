import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUserAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photourl) => {
        const profileInfo = {
            displayName: name,
            photoURL: photourl
        }
        return updateProfile(auth.currentUser, profileInfo)
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithProvider = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const userLogOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser === null || currentUser.uid){
                setUser(currentUser)
            }
            setLoading(false)
        })
        return () => unsubscribe()
    },[])

    const authInfo = {user, setUser, loading, setLoading, createUserAccount, updateUserProfile, userLogin, loginWithProvider, userLogOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;