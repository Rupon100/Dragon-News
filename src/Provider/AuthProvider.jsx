import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Components/firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(loading, user);

    const createNewUSer = (email, pass) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    } 

    const loginUser = (email, pass) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const facebookLogin = () => {
        setLoading(true);
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider);
    }

    const gitHubLogin = () => {
        setLoading(true);
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }


    const authInfo = {
        user,
        loading,
        setUser,
        createNewUSer, 
        loginUser,
        logOutUser,
        updateUser,
        gitHubLogin,
        facebookLogin
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe()
        }
    } ,[])

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;