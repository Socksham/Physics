import React, { useState, useContext, useEffect, useRef } from 'react'
import { auth, db } from '../../utils/Firebase'
import { signInWithGoogle } from '../../utils/GoogleAuthProvider'
import { UserContext } from '../../utils/providers/UserProvider'

const EnterCode = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [code, setCode] = useState("")
    const [error, setError] = useState("")
    const [isDisabled, setIsDisabled] = useState(true)
    const loggedIn = useRef(false)

    const user = useContext(UserContext)

    const codeHandler = async () => {
        const doc = await db.collection("code").doc("IaYbILKwhCfxz415gS5v").get()

        if(user){
            if (doc.data().code === code) {
                await db.collection("users").doc(user.email).set(
                    {
                        authenticated: true
                    },
                    {
                        merge: true
                    }
                )
                history.push("/login")
            } else {
                setError("Invalid code")
            }
        }else{
            setError("No user authenticated")
        }


    }

    useEffect(() => {
        async function func() {
            console.log(user)
            if (user) {
                const ref = await db.collection("users").doc(user.email).get()
                if (ref.data().authenticated) {
                    history.push("/")
                } else {
                    setIsDisabled(false)
                }
            } else {
                console.log("NO USER")
            }
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
                        <div className="bg-red-300 border-dashed border-2 border-red-500 rounded-md pt-1 pb-1 w-96 animate-fade-in-down mt-4">
                            <p className="ml-4 text-red-500 overflow-ellipsis">{error}</p>
                        </div>
                    }

                    <div>

                        <div className="mt-8">
                            <div className="">
                                <p className="text-lg mb-2">Code</p>
                                <input type="password" required id="password" placeholder="" value={code} onChange={(e) => setCode(e.target.value)} className="focus:outline-none bg-glass pr-2 w-96 h-10 text-center text-2xl rounded-md shadow-md focus:border-gray-300 focus:border-2 " />
                            </div>
                            <div className="mt-8 rounded-md p-2 text-center shadow-md cursor-pointer bg-black text-white transition duration-300 ease-in-out hover:bg-glass hover:text-black" onClick={() => { codeHandler() }}>
                                <button className="text-lg">Authenticate</button>
                            </div>
                        </div>



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

export default EnterCode
