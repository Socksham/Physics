import React, { useState, useContext, useEffect, useRef } from 'react'
import { auth, db } from '../../utils/Firebase'
import { signInWithGoogle } from '../../utils/GoogleAuthProvider'
import { UserContext } from '../../utils/providers/UserProvider'

const RegisterScreen = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [code, setCode] = useState("")
    const [error, setError] = useState("")
    const [checkCode, setCheckCode] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const loggedIn = useRef(false)

    const user = useContext(UserContext)

    const codeHandler = async () => {
        const doc = await db.collection("code").doc("IaYbILKwhCfxz415gS5v").get()

        if (doc.data().code === code) {
            setCheckCode(true)
            setError("")
        } else {
            setError("Invalid code")
        }

    }

    useEffect(() => {
        async function func() {
            await auth.getRedirectResult().then(async function (result) {
                // The firebase.User instance:
                console.log("STILL CHECKS HERE")
                var userFromSignIn = result.user;
                if(userFromSignIn !== null){
                    console.log("REGISTER HANDLER")
                    console.log(userFromSignIn)
                    loggedIn.current = true

                    const ref = db.collection("users").doc(userFromSignIn.email)
                    await ref.set({
                        email: userFromSignIn.email,
                        authenticated: true,
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


    const registerHandler = async () => {
        loggedIn.current = true

        signInWithGoogle(true)

        





        // await auth.createUserWithEmailAndPassword(email, password).then(async (res) => {
        //     await auth.signInWithEmailAndPassword(email, password).then((res2) => {
        //         console.log("SIGNED IN")
        //         history.push("/")
        //     })
        //         .catch((err2) => {
        //             console.log("HEERERER")
        //             setError(err2.message)

        //         })
        // }).catch((err) => {
        //     setError(err.message)
        // })
    }

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
                        <div className="bg-red-300 border-dashed border-2 border-red-500 rounded-md pt-1 pb-1 w-96 animate-fade-in-down mt-4">
                            <p className="ml-4 text-red-500 overflow-ellipsis">{error}</p>
                        </div>
                    }

                    <div>
                        {
                            !checkCode ?
                                <div className="mt-8">
                                    <div className="">
                                        <p className="text-lg mb-2">Code</p>
                                        <input type="password" required id="password" placeholder="" value={code} onChange={(e) => setCode(e.target.value)} className="focus:outline-none bg-glass pr-2 w-96 h-10 text-center text-2xl rounded-md shadow-md focus:border-gray-300 focus:border-2 " />
                                    </div>
                                    <div className="mt-8 rounded-md p-2 text-center shadow-md cursor-pointer bg-black text-white transition duration-300 ease-in-out hover:bg-glass hover:text-black" onClick={() => { codeHandler() }}>
                                        <button className="text-lg">Authenticate</button>
                                    </div>
                                </div>

                                :
                                <div className="mt-8">
                                    <div className="disabled:opacity-50" >
                                        <p className="text-lg mb-2">Code</p>
                                        <input type="password" required id="password" placeholder="" value={code} disabled onChange={(e) => setCode(e.target.value)} className="focus:outline-none bg-glass pr-2 w-96 h-10 text-center text-2xl rounded-md shadow-md cursor-pointer focus:border-gray-300 focus:border-2 " />
                                    </div>
                                    <div className="mt-8 rounded-md p-2 text-center shadow-md cursor-pointer bg-black text-white transition duration-300 ease-in-out hover:bg-glass hover:text-black" onClick={() => { registerHandler() }}>

                                        <button className="text-lg" disabled={isDisabled}>Sign up with Google</button>
                                    </div>
                                </div>
                        }

                    </div>

                    <div className="flex space-x-2 justify-center mt-4">
                        <p>Already have an account?</p>
                        <p className="text-blue-500 cursor-pointer" onClick={() => { history.push("/login") }}>Login here!</p>
                    </div>
                </div>
                {/* <div className="flex justify-center space-x-1 mt-4">
                    <p>Already have an account?</p>
                    <p onClick={() => { history.push("/login") }} className="text-blue-500 cursor-pointer">Log in here!</p>
                </div> */}
            </div>

        </div >
    )
}

export default RegisterScreen
