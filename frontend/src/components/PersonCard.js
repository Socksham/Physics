import React from 'react'

const PersonCard = ({img, name, description, email, phone}) => {
    return (
        <div className="flex rounded-lg p-6 space-x-8 shadow-md">
            <div className="w-64">
                <img src={img} className="rounded-lg" />
            </div>
            <div className="flex flex-wrap content-center">
                <div className="space-y-1">
                    <div>
                        <p className="text-xl font-medium">{name}</p>
                    </div>
                    <div className="text-left">
                        <p className="text-md">{description}</p>
                        <div className="flex items-center space-x-2">
                            <p className="text-blue-400 cursor-pointer" onClick={() => {window.open(`mailto:${email}`)}}>Email</p>
                            <div className="h-4 w-px bg-black"/>
                            <p>{phone}</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PersonCard
