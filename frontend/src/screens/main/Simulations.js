import React from 'react'
import Navbar from '../../components/Navbar'

const Simulations = ({history}) => {
    return (
        <div className="bg-glass h-screen">
            <Navbar history={history}/>
            <div className="mt-10 mb-10">
                <p className="text-5xl text-center">Simulations</p>
            </div>
        </div>
    )
}

export default Simulations
