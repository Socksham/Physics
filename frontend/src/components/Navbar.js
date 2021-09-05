import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../utils/providers/UserProvider'
import DropdownRender from './Dropdown'

const Navbar = ({ history, isLoggedIn }) => {

    return (
        <div className="bg-glass pt-8 pr-24 pl-24 pb-6 pt-2 flex justify-between items-center z-40 select-none">
            <div className="flex justify-center text-black cursor-pointer" onClick={() => { history.push("/") }}>
                <p className="font-bold text-2xl">Conant</p>
                <p className="text-2xl">Physics</p>
            </div>
            {
                isLoggedIn !== null ?
                    <div>
                        {
                            isLoggedIn === true ?
                                <div className="mt-1 flex space-x-8 text-black items-center animate-fade-in-down">
                                    <p className="text-xl cursor-pointer" onClick={() => { history.push("/simulations") }}>Simulations</p>
                                    <p className="text-xl cursor-pointer" onClick={() => { history.push("/resources") }}>Resources</p>
                                    <DropdownRender history={history} />
         
                                    <div className="rounded-md p-2 text-center shadow-md cursor-pointer bg-black text-white text-xl transition duration-300 ease-in-out hover:bg-glass hover:text-black" onClick={() => { history.push("/logout") }}>

                                    <p onClick={() => { history.push("/logout") }}>Logout</p>
                                    </div>
                                </div>
                                :
                                <div className="mt-1 flex space-x-8 text-black items-center animate-fade-in-down">
                                    <p className="text-xl cursor-pointer" onClick={() => { history.push("/login") }}>Login</p>
                                    <p className="text-xl bg-black text-white p-2 rounded-lg cursor-pointer " onClick={() => { history.push("/register") }}>Signup</p>
                                </div>
                        }

                    </div>
                    :
                    <div className="mt-1 flex space-x-8 text-black items-center">
                        <div className="cursor-pointer w-14 h-6 bg-gray-300 animate-pulse rounded-md"></div>
                        <div className="cursor-pointer w-14 h-6 bg-gray-300 animate-pulse rounded-md"></div>
                        <div className="cursor-pointer w-14 h-6 bg-gray-300 animate-pulse rounded-md"></div>
                        <div className="cursor-pointer w-14 h-6 bg-gray-300 animate-pulse rounded-md"></div>
                    </div>
            }


        </div>
    )
}

export default Navbar
