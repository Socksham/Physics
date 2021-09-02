import React from 'react'
import Navbar from '../../components/Navbar'

const HomeScreen = () => {
    return (
        // <div className="">
        <>
            <Navbar />

            <div className="flex justify-between pl-24 pr-24">
                <div className="w-1/2 flex items-center">
                    <div className="space-y-4">
                        <p className="text-6xl">Physics for everyone</p>
                        <p className="text-3xl">Study. Grow. Achieve</p>
                    </div>

                </div>
                <div className="w-1/2">
                    <img src="/frontPageImg.png" className=""/>

                </div>
            </div>

            <div>
                <div>
                    <p className="text-2xl text-center">About Us</p>
                </div>
                <div>
                    
                </div>
            </div>



            {/* className=" bg-cover bg-no-repeat w-full h-full"  */}

            {/* <div className="flex justify-between mr-20 ml-20">
                <div className="w-full border-2">
                    <div className="flex justify-center">
                        <p className="text-xl">About Us</p>
                    </div>
                </div>
                <div className="w-full border-2">
                    <div className="flex justify-center">
                        <p className="text-xl">Contact</p>
                    </div>
                </div>
            </div> */}
        </>


        // </div>
    )
}

export default HomeScreen
