import React, { useState } from 'react'
import { auth, db } from '../../utils/Firebase'

const RegisterScreen = ({ history }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [code, setCode] = useState("")
    const [error, setError] = useState("")

    const registerHandler = async () => {
        const doc = await db.collection("code").doc("IaYbILKwhCfxz415gS5v").get()

        if (doc.data().code === code) {
            await auth.createUserWithEmailAndPassword(email, password).then(async (res) => {
                await auth.signInWithEmailAndPassword(email, password).then((res2) => {
                    console.log("SIFNED IN")
                    // history.push("/")
                })
                .catch((err2) => {
                    console.log("HEERERER")
                    setError(err2.message)

                })
            })
                .catch((err) => {
                    setError(err.message)
                })
        } else {
            setError("Invalid code")
        }

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
                        <div>
                            <p>Code</p>
                            <input type="text" required id="password" placeholder="" value={code} onChange={(e) => setCode(e.target.value)} className="focus:outline-none pr-2 w-96 border-b-2" />
                        </div>
                    </div>
                    <div onClick={(e) => { registerHandler(e) }} className="flex justify-center bg-gradient-to-r from-login-red to-login-blue rounded-3xl">
                        <button className="pt-2 pb-2 text-white text-lg">Register</button>
                    </div>
                </div>
                <div className="flex justify-center space-x-1 mt-4">
                    <p>Already have an account?</p>
                    <p onClick={() => { history.push("/login") }} className="text-blue-500 cursor-pointer">Log in here!</p>
                </div>
            </div>

        </div>
    )
}

export default RegisterScreen
