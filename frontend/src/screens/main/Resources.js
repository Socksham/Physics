import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import ResourcesCard from '../../components/ResourcesCard'
import { db } from '../../utils/Firebase'

const Resources = ({history}) => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function func() {
            await db.collection("resources").get().then((docs) => {
                docs.forEach((doc) => {
                    setData(old => [...old, doc.data()])
                })
            })
        }

        func()
    }, [])

    return (
        <>
            <Navbar history={history}/>
            
            <div className="text-center mt-10 mb-10">
                <p className="text-4xl">Resources</p>
            </div>

            <div className="grid grid-cols-3 gap-4 pl-40 pr-40 ">
                {
                    data.map((doc) => {
                        return (
                            <ResourcesCard img={doc.Image} name={doc.Name} link={doc.Link}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Resources
