import React from 'react'
import DropdownRender from './Dropdown'

const Navbar = () => {
    
    return (
        <div className="pr-24 pl-24 pb-2 pt-2 flex justify-between z-40">
            <div className="flex justify-centern text-black">
                <p className="font-bold text-xl">Conant</p>
                <p className="text-xl">Physics</p>
            </div>

            <div className="flex space-x-4 text-black">
                <p>Resources</p>
                <DropdownRender />
            </div>
            
        </div>
    )
}

export default Navbar
