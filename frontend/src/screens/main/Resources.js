import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../../components/Navbar'
import ResourcesCard from '../../components/ResourcesCard'
import { db } from '../../utils/Firebase'
import { UserContext } from '../../utils/providers/UserProvider'

const Resources = ({ history }) => {
    const [data, setData] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(null)
    const user = useContext(UserContext)

    useEffect(() => {

        var arr = []

        async function func() {
            if (user) {
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
            await db.collection("resources").get().then((docs) => {
                docs.forEach((doc) => {
                    arr.push(doc.data())
                })
            })
            setData(arr)
        }

        func()


    }, [user])

    return (
        <>
            <Navbar history={history} isLoggedIn={isLoggedIn}/>

            <div className="bg-glass h-screen">
                <div className="text-center pt-6 mb-20">
                    <p className="text-4xl">Resources</p>
                </div>

                <div className="grid grid-cols-3 gap-4 pl-40 pr-40">
                    {
                        data.map((doc) => {
                            return (
                                <ResourcesCard img={doc.Image} name={doc.Name} link={doc.Link} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Resources
