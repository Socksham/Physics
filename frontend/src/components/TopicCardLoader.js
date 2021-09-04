import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const TopicCardLoader = () => {
    return (
        <div className="flex items-center space-x-2 animate-fade-in-down">
            <div className="cursor-pointer mb-2 p-2  shadow-md  rounded-md">
                <div className="w-20 h-6 bg-gray-300 rounded-lg animate-pulse" />
            </div>
            <div className="cursor-pointer mb-2 p-2  shadow-md  rounded-md">
                <div className="w-20 h-6 bg-gray-300 rounded-lg animate-pulse" />
            </div>
            <div className="-mt-2">
                <ArrowForwardIcon />
            </div>
        </div>
    )
}

export default TopicCardLoader
