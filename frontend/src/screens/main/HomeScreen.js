import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import PersonCard from '../../components/PersonCard'
import { db } from '../../utils/Firebase'

const HomeScreen = ({ history }) => {
    const [data, setData] = useState([])

    useEffect(() => {

        async function func() {
            var peopleArr = []
            await db.collection("home").get().then((docs) => {
                docs.forEach((doc) => {
                    peopleArr.push(doc.data())
                    // setData(old => [...old, doc.data()])
                })
            })
            setData(peopleArr)
        }


        func()

    }, [])

    return (
        <>
            <Navbar history={history} />

            <div className="bg-glass">
                <div className="flex items-center">
                    <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:pl-24 lg:pr-24 pl-10 pr-10 mt-4  animate-fade-in-down">

                        <div className="lg:w-1/2 animate-fade-in-down">
                            <img src="/frontPageImg.png" className="" />

                        </div>
                        <div className="mt-4 md:mt-0 lg:w-1/2 lg:flex text-center lg:items-center lg:text-left animate-fade-in-down">
                            <div className="space-y-4">
                                <p className="text-3xl md:text-6xl">Physics for everyone</p>
                                <p className="text-2xl md:text-3xl">Study. Grow. Achieve.</p>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="mt-10 md:mt-32 animate-fade-in-down">
                    <div className="mb-4 md:mb-10">
                        <p className="text-2xl md:text-3xl text-center">Contact</p>
                    </div>
                    <div className="ml-24 mr-24 lg:ml-20 lg:mr-20 flex justify-center">
                        <div className="grid lg:grid-cols-2 gap-4">
                            {
                                data.map((doc) => {
                                    return (
                                        <div key={doc.name}>
                                            <PersonCard name={doc.Name} phone={doc.Number} email={doc.Email} img="/personImg.jpg" description={doc.Description} key={doc.name} />
                                        </div>

                                    )
                                })
                            }
                        </div>

                    </div>
                </div>

                <div className="mt-10 md:mt-20 lg:ml-64 lg:mr-64 ml-10 mr-10 pt-4 pb-8 px-6 rounded-lg shadow mb-1 bg-white">
                    <div className="mb-8">
                        <p className="text-xl md:text-3xl text-center">About Us</p>
                    </div>
                    <div className="space-y-3 text-lg">
                        <p>Conant Physics is comprised of four teachers at James B. Conant High School in Hoffman Estates, Illinois. Chris Bruce, Martin Kulak, and Dave Torpe have worked together for years to create a series of comprehensive courses in physics.</p>
                        <p>Through careful trial and error, the Conant Physics teachers have become leaders in the education community in introducing technology in the classroom to increase student achievement. Through labs, simulations, interactive lectures, hands on experiences, and other classroom techniques, Conant students are able to discover how exciting it is to learn physics.</p>
                        <p>With unmatched passion, the teachers of Conant Physics work to create a community of students who not only love physics, but love to learn about physics.</p>
                    </div>
                </div>
                <div className="bg-glass pb-20" />
            </div>


        </>
    )
}

export default HomeScreen
