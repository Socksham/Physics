import React from 'react'

const ResourcesCard = ({img, link, name}) => {
    return (
        <div onClick={() => {window.open(link)}} className="shadow-md rounded-md flex justify-center p-4 align-center h-full cursor-pointer bg-white">
            <div className="text-center m-auto space-y-2">
                <p className="text-xl">{name}</p>
                <img className="w-48" src={img}/>
            </div>
            
        </div>
    )
}

export default ResourcesCard
