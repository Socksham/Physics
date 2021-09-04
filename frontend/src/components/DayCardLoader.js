import React from 'react'

const DayCardLoader = () => {
    return (
        <div className="animate-fade-in-down bg-white">
            <div className="shadow-xl rounded-b-xl">
                <div className="flex space-x-4 items-center bg-black rounded-t-xl p-4">
                    <div className="">
                        <div className="border-2 w-12 h-12 flex items-center justify-center bg-black border-white rounded-md animate-pulse">

                        </div>
                    </div>
                    <p className="text-white"></p>
                </div>
                <div className="p-4">
                    <div>
                        <p className="text-md font-semibold">Homework</p>
                    </div>
                    <div className=" mt-2 animate-pulse w-full h-4 bg-gray-300 rounded-md"></div>
                    <div className=" mt-2 animate-pulse w-full h-4 bg-gray-300 rounded-md"></div>
                    <div className="border-2 border-black mt-4 p-2 rounded-md flex justify-center cursor-pointer animate-pulse">
                        <button>Expand</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default DayCardLoader
