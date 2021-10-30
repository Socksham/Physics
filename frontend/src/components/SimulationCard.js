import React, { useEffect } from 'react'

const SimulationCard = ({ link, image, name }) => {

    return (
        <div onClick={() => {window.open(link)}} className="shadow-md rounded-md flex justify-center p-4 align-center h-full cursor-pointer bg-white animate-fade-in-down">
            <div className="text-center m-auto space-y-2 animate-fade-in-down">
                <p>{name}</p>
                <img className="w-48 animate-fade-in-down" src={image}/>
            </div>
            
        </div>
    )
}

export default SimulationCard
