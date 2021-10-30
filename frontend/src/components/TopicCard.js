import React, { useState } from 'react'

const TopicCard = ({ name, clicked, last, setTopic, color }) => {
    return (
        <div onClick={() =>{
            setTopic(name)
            }} className="animate-fade-in-down pt-3">
            {
                clicked ?
                    <div>
                        {
                            last ?
                                <div className={`cursor-pointer mb-2 shadow-md p-2 rounded-md ${color === "green" && "bg-green-400"} ${color === "red" && "bg-red-400"} ${color === "yellow" && "bg-yellow-400"} ${color === "pink" && "bg-pink-400"} ${color === "blue" && "bg-blue-400"} ${color === "indigo" && "bg-indigo-400"}`}>
                                    <p className="text-white whitespace-nowrap">{name}</p>
                                </div>
                                :
                                <div className={`cursor-pointer mr-2 mb-2 shadow-md p-2 rounded-md ${color === "green" && "bg-green-400"} ${color === "red" && "bg-red-400"} ${color === "yellow" && "bg-yellow-400"} ${color === "pink" && "bg-pink-400"} ${color === "blue" && "bg-blue-400"} ${color === "indigo" && "bg-indigo-400"}`}>
                                    <p className="text-white whitespace-nowrap">{name}</p>
                                </div>

                        }
                    </div>

                    :
                    <div>
                        {
                            last ?
                                <div className="cursor-pointer mb-2 p-2  shadow-md rounded-md bg-white">
                                    <p className="whitespace-nowrap">{name}</p>
                                </div>
                                :
                                <div className="cursor-pointer mr-2 mb-2 p-2 shadow-md rounded-md bg-white">
                                    <p className="whitespace-nowrap">{name}</p>
                                </div>
                        }
                    </div>

            }
        </div>

    )
}

export default TopicCard
