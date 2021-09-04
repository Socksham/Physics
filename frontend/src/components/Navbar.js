import React from 'react'
import DropdownRender from './Dropdown'

const Navbar = ({ history, isLoggedIn }) => {

    return (
        <div className="bg-glass pt-8 pr-24 pl-24 pb-6 pt-2 flex justify-between items-center z-40 select-none">
            <div className="flex justify-center text-black cursor-pointer" onClick={() => { history.push("/") }}>
                <p className="font-bold text-2xl">Conant</p>
                <p className="text-2xl">Physics</p>
            </div>
            {
                isLoggedIn ?
                    <div className="mt-1 flex space-x-8 text-black items-center">
                        <p className="text-xl cursor-pointer" onClick={() => { history.push("/simulations") }}>Simulations</p>
                        <p className="text-xl cursor-pointer" onClick={() => { history.push("/resources") }}>Resources</p>
                        <DropdownRender history={history} />
                    </div>
                    :
                    <div className="mt-1 flex space-x-8 text-black items-center">
                        <p className="text-xl cursor-pointer" onClick={() => { history.push("/login") }}>Login</p>
                        <p className="text-xl bg-black text-white p-2 rounded-lg cursor-pointer" onClick={() => { history.push("/register") }}>Signup</p>
                    </div>
            }


        </div>
    )
}

export default Navbar
