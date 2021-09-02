import React from 'react'
import DropdownRender from './Dropdown'

const Navbar = ({history}) => {
    
    return (
        <div className="bg-glass pt-8 pr-24 pl-24 pb-6 pt-2 flex justify-between items-center z-40">
            <div className="flex justify-center text-black cursor-pointer" onClick={() => {history.push("/")}}>
                <p className="font-bold text-2xl">Conant</p>
                <p className="text-2xl">Physics</p>
            </div>

            <div className="flex space-x-8 text-black items-center">
                <p className="text-xl cursor-pointer" onClick={() => {history.push("/resources")}}>Resources</p>
                <DropdownRender />
            </div>
            
        </div>
    )
}

export default Navbar
