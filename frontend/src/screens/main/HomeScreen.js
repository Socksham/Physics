import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import PersonCard from '../../components/PersonCard'
import { db } from '../../utils/Firebase'

const HomeScreen = ({ history }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function func() {
            await db.collection("home").get().then((docs) => {
                docs.forEach((doc) => {
                    setData(old => [...old, doc.data()])
                })
            })
        }

        func()

    }, [])
    return (
        <>
            <Navbar history={history} />

            <div className="bg-glass">
                <div className="flex justify-between pl-24 pr-24">
                    <div className="w-1/2 flex items-center">
                        <div className="space-y-4">
                            <p className="text-6xl">Physics for everyone</p>
                            <p className="text-3xl">Study. Grow. Achieve</p>
                        </div>

                    </div>
                    <div className="w-1/2">
                        <img src="/frontPageImg.png" className="" />

                    </div>
                </div>

                <div className="mt-32">
                    <div className="mb-10">
                        <p className="text-3xl text-center">Contact</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 gap-4">
                            {
                                data.map((doc) => {
                                    return (
                                        <PersonCard name={doc.Name} phone={doc.Number} email={doc.Email} img="/personImg.jpg" description={doc.Description} />
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>

                <div className="mt-20 ml-64 mr-64 pt-4 pb-8 px-6 rounded-lg shadow mb-1">
                    <div className="mb-8">
                        <p className="text-3xl text-center">About Us</p>
                    </div>
                    <div className="space-y-3 text-lg">
                        <p>Conant Physics is comprised of four teachers at James B. Conant High School in Hoffman Estates, Illinois. Chris Bruce, Martin Kulak, and Dave Torpe have worked together for years to create a series of comprehensive courses in physics.</p>
                        <p>Through careful trial and error, the Conant Physics teachers have become leaders in the education community in introducing technology in the classroom to increase student achievement. Through labs, simulations, interactive lectures, hands on experiences, and other classroom techniques, Conant students are able to discover how exciting it is to learn physics.</p>
                        <p>With unmatched passion, the teachers of Conant Physics work to create a community of students who not only love physics, but love to learn about physics.</p>
                    </div>
                </div>
                <div className="bg-glass pb-20"/>
            </div>


        </>
    )
}

export default HomeScreen
