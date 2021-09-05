import React, { useState, useEffect, useContext, useRef } from 'react'
import { auth, db } from '../../utils/Firebase'
import { UserContext } from '../../utils/providers/UserProvider'
import { signInWithGoogle } from '../../utils/GoogleAuthProvider'

const LoginScreen = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const loggedIn = useRef(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const user = useContext(UserContext)

    const loginHandler = async (e) => {
        loggedIn.current = true
        var userFromSignIn = await signInWithGoogle(false)

        console.log(userFromSignIn)
        const ref = db.collection("users").doc(userFromSignIn.email)
        const exists = (await ref.get()).exists

        if (exists) {
            history.push("/")
        } else {
            await ref.set({
                email: userFromSignIn.email,
                authenticated: false,
            })
            history.push("/entercode")
        }


    }

    useEffect(() => {
        async function func() {
            await auth.getRedirectResult().then(async function (result) {
                // The firebase.User instance:
                console.log("STILL CHECKS HERE")
                var userFromSignIn = result.user;
                if(userFromSignIn !== null){
                    console.log("LOGIN HANDLER")
                    console.log(userFromSignIn)
                    loggedIn.current = true

                    db.collection("users").doc(userFromSignIn.email).set({
                        email: userFromSignIn.email,
                        authenticated: false
                    })

                    history.push("/")
                }else{
                    if (user) {
                        console.log(loggedIn.current)
                        if (!loggedIn.current) {
                            const ref = await db.collection("users").doc(user.email).get()
                            console.log(user.email)
                            console.log(ref)
                            if (ref.data().authenticated) {
                                setIsDisabled(true)
                                history.push("/")
                            } else {
                                history.push("/entercode")
        
                            }
                            console.log(user)
                        }
        
                    } else {
                        setIsDisabled(false)
                    }
                }
                
            }, function (error) {
                // The provider's account email, can be used in case of
                // auth/account-exists-with-different-credential to fetch the providers
                // linked to the email:
                var email = error.email;
                // The provider's credential:
                var credential = error.credential;
                console.log("ERRORs")
                // In case of auth/account-exists-with-different-credential error,
                // you can fetch the providers using this:
                if (error.code === 'auth/account-exists-with-different-credential') {
                    auth.fetchSignInMethodsForEmail(email).then(function (providers) {
                        // The returned 'providers' is a list of the available providers
                        // linked to the email address. Please refer to the guide for a more
                        // complete explanation on how to recover from this error.
                    });
                }
            });
        }

        func()

    }, [user])

    return (
        <div className="flex bg-glass h-screen">
            <div className="m-auto bg-white pt-20 pb-20 pr-20 pl-20 rounded-3xl shadow-xl animate-fade-in-down">
                <div className="content-center">
                    <div className="flex justify-center">
                        <p className="font-bold text-3xl">Conant</p>
                        <p className="text-3xl">Physics</p>
                    </div>
                    {
                        error !== "" &&
                        <div className="bg-red-300 border-dashed border-2 border-red-500 rounded-md pt-1 pb-1 w-96">
                            <p className="ml-4 text-red-500 overflow-ellipsis">{error}</p>
                        </div>
                    }

                    <div className="mt-6 rounded-md p-2 text-center shadow-md cursor-pointer bg-black text-white transition duration-300 ease-in-out hover:bg-glass hover:text-black w-96" onClick={() => { loginHandler() }}>

                        <button className="text-lg" disabled={isDisabled}>Sign in with Google</button>
                    </div>
                </div>
                <div className="flex justify-center space-x-1 mt-4">
                    <p>Don't have an account?</p>
                    <p onClick={() => { history.push("/register") }} className="text-blue-500 cursor-pointer">Register here!</p>
                </div>
            </div>

        </div>
    )
}

export default LoginScreen
