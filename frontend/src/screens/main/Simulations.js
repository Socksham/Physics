import React, { useEffect, useState, useContext } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import SimulationCard from '../../components/SimulationCard'
import { db } from '../../utils/Firebase'

const Simulations = ({ history }) => {
    const [simulationData, setSimulationData] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(null)

    useEffect(() => {
        var arr = []

        async function func() {
            const data = await db.collection("simulations").get()

            data.docs.forEach((doc) => {
                setSimulationData(old => [...old, doc.data()])
            })
        }

        func()
    }, [])


    return (
        <>

            <div className="bg-glass h-screen">
                <Navbar history={history} isLoggedIn={isLoggedIn} />

                <div className="mt-10 mb-10">
                    <p className="text-2xl md:text-4xl text-center">Simulations</p>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 pl-4 pr-4 md:pl-40 md:pr-40">
                    {
                        simulationData.map((doc) => {
                            console.log(doc)
                            return (
                                <SimulationCard image={doc.image} link={doc.link} name={doc.name} />
                            )
                        })
                    }
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Simulations
