import React, { useEffect } from 'react'

const DayCard = ({ day, name, homework, videos, extras }) => {
    useEffect(() => {
        console.log("HOMEWORK FROM PARENT")
        console.log(homework)
    }, [])
    return (
        <div className="shadow-xl rounded-b-xl">
            <div className="flex space-x-4 items-center bg-black rounded-t-xl p-4">
                <div className="">
                    <div className="border-2 w-12 h-12 flex items-center justify-center bg-black border-white rounded-md">
                        <p className="text-2xl text-white ">{day}</p>
                    </div>
                </div>
                <p className="text-white">{name}</p>
            </div>
            <div className="p-4">
                <div>
                    <p className="text-md font-semibold">Homework</p>
                    <div>
                        {
                            homework[0].map((doc, i) => {
                                return (
                                    <p key={doc.name} onClick={() => {window.open(doc.link)}} className="cursor-pointer text-sm">{doc.name}</p>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DayCard
