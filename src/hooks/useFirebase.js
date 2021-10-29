import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Firebase/Firebase.init";
initAuth()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const auth = getAuth();


    const signInWithGoogle = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

            .finally(() => setLoading(false));

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setLoading(false)
        })
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setLoading(false));


    }

    return {
        user,
        signInWithGoogle,
        logOut,
        loading

    }
}

export default useFirebase;