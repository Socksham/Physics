import React, { useContext, useEffect, useState } from 'react'
import DropdownRender from './Dropdown'

const Navbar = ({ history }) => {

    const [clicked, setClicked] = useState(false)

    return (
        <div className="bg-glass">
            <div className="bg-glass pt-8 lg:pr-24 lg:pl-24 pl-12 pr-12 md:pb-6 pt-2 flex justify-between items-center select-none animate-fade-in-down">
                <div className="flex justify-center text-black cursor-pointer" onClick={() => { history.push("/") }}>
                    <p className="font-bold text-2xl">Conant</p>
                    <p className="text-2xl">Physics</p>
                </div>

                <div className="hidden sm:flex mt-1 flex space-x-8 text-black items-center ">
                    <p className="text-xl cursor-pointer" onClick={() => { history.push("/simulations") }}>Simulations</p>
                    <p className="text-xl cursor-pointer" onClick={() => { history.push("/resources") }}>Resources</p>
                    <DropdownRender history={history} />

                </div>

                <div className="flex sm:hidden mb-1 cursor-pointer">
                    <label onClick={() => setClicked(!clicked)} for="menu-toggle" className="pointer-cursor block lg:hidden block"><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
                    <input className="hidden" type="checkbox" id="menu-toggle" />
                </div>



            </div>
            <div className="pl-12 pr-12">
                {
                    clicked
                        ?
                        <div className="md:hidden w-full justify-end text-black" id="menu">
                            <nav>
                                <ul className="cursor-pointer text-base text-gray-700 pt-4 items-end">
                                    <li className="flex justify-end py-3 px-0 block border-b-2 hover:border-indigo-400 space-x-1" onClick={(e) => {
                                        e.preventDefault()
                                        history.push("/advancedphysics")
                                    }}>
                                        Advanced Physics
                                    </li>
                                    <li className="flex justify-end py-3 px-0 block border-b-2 hover:border-indigo-400" onClick={(e) => {
                                        e.preventDefault()
                                        history.push("/apphysics1")
                                    }}>AP Physics 1</li>
                                    <li className="flex justify-end py-3 px-0 block border-b-2 hover:border-indigo-400" onClick={(e) => {
                                        e.preventDefault()
                                        history.push("/apphysics12")
                                    }}>
                                        AP Physics 1 and 2</li>
                                    <li className="flex justify-end py-3 px-0 block border-b-2 hover:border-indigo-400" onClick={(e) => {
                                        e.preventDefault()
                                        history.push("/apphysicsc")
                                    }}>
                                        AP Physics C</li>
                                    <li className="flex justify-end py-3 px-0 block border-b-2 hover:border-indigo-400" onClick={(e) => {
                                        e.preventDefault()
                                        history.push("/physicalscience")
                                    }}>
                                        Physical Science
                                    </li>
                                    <li className="flex justify-end py-3 px-0 block border-b-2 hover:border-indigo-400" onClick={(e) => {
                                        e.preventDefault()
                                        history.push("/physics")
                                    }}>
                                        Physics</li>
                                </ul>
                            </nav>
                        </div>
                        :
                        <div className="hidden w-full" id="menu">

                        </div>
                }
            </div>

        </div>
    )
}

export default Navbar
