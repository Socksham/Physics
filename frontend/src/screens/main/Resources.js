import React, { useEffect, useState, useContext } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import ResourcesCard from '../../components/ResourcesCard'
import { db } from '../../utils/Firebase'

const Resources = ({ history }) => {
    const [data, setData] = useState([])

    useEffect(() => {

        var arr = []

        async function func() {
            await db.collection("resources").get().then((docs) => {
                docs.forEach((doc) => {
                    arr.push(doc.data())
                })
            })
            setData(arr)
        }

        func()


    }, [])

    return (
        <>
            <Navbar history={history}/>

            <div className="bg-glass h-screen">
                <div className="text-center pt-6 mb-4 md:mb-10">
                    <p className="text-2xl md:text-4xl">Resources</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pl-4 pr-4 md:pl-40 md:pr-40">
                    {
                        data.map((doc) => {
                            return (
                                <ResourcesCard img={doc.Image} name={doc.Name} link={doc.Link} />
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Resources
