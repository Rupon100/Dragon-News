import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Components/firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user)

    const createNewUSer = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    } 

    const loginUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const logOutUser = () => {
        return signOut(auth);
    }


    const authInfo = {
        user,
        setUser,
        createNewUSer, 
        loginUser,
        logOutUser
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
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