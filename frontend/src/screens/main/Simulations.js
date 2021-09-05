import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../../components/Navbar'
import SimulationCard from '../../components/SimulationCard'
import { db } from '../../utils/Firebase'
import { UserContext } from '../../utils/providers/UserProvider'

const Simulations = ({ history }) => {
    const [simulationData, setSimulationData] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(null)
    const user = useContext(UserContext)

    useEffect(() => {
        var arr = []

        async function func() {
            if (user) {
                setIsLoggedIn(true)
                console.log("THERE WAS A USER")
                const ref = await db.collection("users").doc(user.email).get()
                if(ref.data().authenticated){
                }else{
                    history.push("/entercode")
                }
            } else {
                setIsLoggedIn(false)
            }
            const data = await db.collection("simulations").get()

            data.docs.forEach((doc) => {
                setSimulationData(old => [...old, doc.data()])
            })
        }

        func()
    }, [user])


    return (
        <div className="bg-glass h-screen">
            <Navbar history={history} isLoggedIn={isLoggedIn}/>
            <div className="mt-10 mb-10">
                <p className="text-5xl text-center">Simulations</p>
            </div>
            <div className="grid grid-cols-2">
                {/* {
                    simulationData.map((doc, i) => {
                        return (
                            <div key={i}>
                                <SimulationCard name={doc.name} link={doc.link} image={doc.image} />
                            </div>
                        )

                    })
                } */}
                <SimulationCard name="ewfwef" link="fef" image="ef"/>
                <SimulationCard name="ewfwef" link="fef" image="ef"/>

            </div>
        </div>
    )
}

export default Simulations
