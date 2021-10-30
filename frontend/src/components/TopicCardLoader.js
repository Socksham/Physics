import React from 'react'


const TopicCardLoader = () => {
    return (
        <div className="flex items-center space-x-2 animate-fade-in-down">
            <div className="cursor-pointer mb-2 p-2  shadow-md  rounded-md">
                <div className="w-20 h-6 bg-gray-300 rounded-lg animate-pulse" />
            </div>
            <div className="cursor-pointer mb-2 p-2  shadow-md  rounded-md">
                <div className="w-20 h-6 bg-gray-300 rounded-lg animate-pulse" />
            </div>
        </div>
    )
}

export default TopicCardLoader
