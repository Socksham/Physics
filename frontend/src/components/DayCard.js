import React, { useEffect, useState } from 'react'

const DayCard = ({ day, name, homework, videos, extras, color }) => {

    const [show, setShow] = useState(false)

    return (
        <div className="animate-fade-in-down">
            <div className="shadow-xl rounded-b-xl bg-white">
                <div className={`flex space-x-4 items-center ${color === "green" && "bg-green-400"} ${color === "red" && "bg-red-400"} ${color === "yellow" && "bg-yellow-400"} ${color === "pink" && "bg-pink-400"} ${color === "blue" && "bg-blue-400"} ${color === "indigo" && "bg-indigo-400"} rounded-t-xl p-4 fade-in`}>
                    <div className="">
                        <div className={`border-2 w-12 h-12 flex items-center justify-center bg-black border-white rounded-md`}>
                            <p className="text-2xl text-white ">{day}</p>
                        </div>
                    </div>
                    <p className="text-white">{name}</p>
                </div>
                <div className="p-4">
                    <div>
                        <p className="text-md font-semibold">Homework</p>
                        {
                            homework[0] !== undefined &&

                            homework[0].map((doc, i) => {
                                if (doc.name === "TBD") {
                                    return (
                                        <p key={i} className="cursor-pointer text-sm text-gray-500">{doc.name}</p>
                                    )
                                } else {
                                    return (
                                        <p key={i} onClick={() => { window.open(doc.link) }} className="cursor-pointer text-sm">{doc.name}</p>
                                    )
                                }

                            })

                        }

                    </div>
                    <div>
                        {
                            show ?
                                <div>
                                    <div className="mt-2 mb-2 w-full h-px bg-gray-300" />

                                    <p className="text-md font-semibold">Extras</p>

                                    <div className="">
                                        {
                                            extras[0].length != 0 ?

                                                extras[0].map((doc, i) => {
                                                    return (
                                                        <p key={i} onClick={() => { window.open(doc.link) }} className="cursor-pointer text-sm">{doc.name}</p>
                                                    )
                                                })

                                                :
                                                <></>

                                        }
                                    </div>
                                    {
                                        extras[0] !== undefined &&
                                        <div>
                                            {
                                                extras[0].length !== 0 &&
                                                <div className="border-2 border-black mt-4 p-2 rounded-md flex justify-center cursor-pointer" onClick={() => { setShow(!show) }}>
                                                    <button>Shrink</button>
                                                </div>


                                            }
                                        </div>


                                    }

                                </div>

                                :
                                <div>
                                    {
                                        extras[0] !== undefined &&
                                        <div>
                                            {
                                                extras[0].length !== 0 &&
                                                <div className="border-2 border-black mt-4 p-2 rounded-md flex justify-center cursor-pointer" onClick={() => { setShow(!show) }}>
                                                    <button>Expand</button>
                                                </div>
                                            }
                                        </div>
                                    }


                                </div>

                        }
                    </div>

                </div>
            </div>

        </div>
    )
}

export default DayCard
