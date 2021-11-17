import axios from "axios";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseInit from "../firebase/firebase.init";

FirebaseInit();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const googleSinIn = () => {
        return signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
                saveGoogleUserToDb(result.user.email, result.user.displayName)
            })
    }

    const emailSignUp = (name, email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                const newUser = { email, password, displayName: name }
                setUser(newUser);
                saveUserToDb(email, name);
                updateProfile(auth?.currentUser, {
                    displayName: name
                })
                    .then(() => {
                    })
                    .catch((error) => setError(error.message))

            })
    }
    const emailSignIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => setUser({}))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {

        const unsubscribe = () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user)
                    getIdToken(user)
                        .then(idToken => localStorage.setItem('idToken', idToken));
                } else {
                    setUser({})
                }
                setIsLoading(false)
            });

        }
        return unsubscribe();
    }, [auth])

    const saveUserToDb = (email, displayName) => {
        const user = { email, displayName };
        axios.post('https://doneza.herokuapp.com/users', user)
            .then(res => { })
            .catch(error => { })
    }
    const saveGoogleUserToDb = (email, displayName) => {
        const user = { email, displayName };
        axios.put('https://doneza.herokuapp.com/users', user)
            .then(res => { })
            .catch(error => { })
    }

    useEffect(() => {
        axios.get(`https://doneza.herokuapp.com/users/${user?.email}`)
            .then(res => setAdmin(res.data.admin));
    }, [user?.email])

    return {
        user,
        emailSignUp,
        emailSignIn,
        setError,
        admin,
        error,
        logOut,
        isLoading,
        setIsLoading,
        googleSinIn
    }
}

export default useFirebase;
