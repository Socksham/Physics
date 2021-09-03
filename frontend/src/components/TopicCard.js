import React from 'react'

const TopicCard = ({ name, clicked, last, setTopic }) => {
    return (
        <div onClick={() =>{setTopic(name)}}>
            {
                clicked ?
                    <div>
                        {
                            last ?
                                <div className="cursor-pointer mb-2 shadow-md p-2 rounded-md bg-black">
                                    <p className="text-white whitespace-nowrap">{name}</p>
                                </div>
                                :
                                <div className="cursor-pointer mr-2 mb-2 shadow-md p-2 rounded-md bg-black">
                                    <p className="text-white whitespace-nowrap">{name}</p>
                                </div>

                        }
                    </div>

                    :
                    <div>
                        {
                            last ?
                                <div className="cursor-pointer mb-2 p-2  shadow-md  rounded-md">
                                    <p className="whitespace-nowrap">{name}</p>
                                </div>
                                :
                                <div className="cursor-pointer mr-2 mb-2 p-2 shadow-md  rounded-md">
                                    <p className="whitespace-nowrap">{name}</p>
                                </div>
                        }
                    </div>

            }
        </div>

    )
}

export default TopicCard
