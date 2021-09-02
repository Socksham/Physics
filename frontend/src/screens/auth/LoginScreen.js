import React, { useState } from 'react'
import { auth } from '../../utils/Firebase'

const LoginScreen = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    const loginHandler = async (e) => {
        e.preventDefault()
        await auth.signInWithEmailAndPassword(email, password).then((res) => {
            history.push("/")
        }).catch((err) => {
            console.log("ERROR")
            console.log(err)
            if (err.message === "There is no user record corresponding to this identifier. The user may have been deleted.") {
                setError("Incorrect credentials")
            } else {
                setError(err.message)
            }
        })
    }

    return (
        <div className="flex bg-gradient-to-r from-login-red to-login-blue h-screen">
            <div className="m-auto bg-white pt-20 pb-20 pr-20 pl-20 rounded-3xl">
                <div className="content-center space-y-10">
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

                    <div className="space-y-6">
                        <div className="">
                            <p>Email</p>
                            <input type="text" required id="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} className="focus:outline-none pr-2 w-96 border-b-2" />
                        </div>
                        <div>
                            <p>Password</p>
                            <input type="password" required id="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} className="focus:outline-none pr-2 w-96 border-b-2" />
                        </div>
                    </div>
                    <div onClick={(e) => { loginHandler(e) }} className="flex justify-center bg-gradient-to-r from-login-red to-login-blue rounded-3xl">
                        <button className="pt-2 pb-2 text-white text-lg">Login</button>
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
