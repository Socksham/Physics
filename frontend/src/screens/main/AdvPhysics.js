import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import TopicCard from '../../components/TopicCard'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { db } from "../../utils/Firebase"
import DayCard from '../../components/DayCard';

const AdvPhysics = ({ history }) => {
    const [classNamesData, setClassNamesData] = useState([])
    const [homework, setHomework] = useState([])
    const [videos, setVideos] = useState([])
    const [extras, setExtras] = useState([])
    const [days, setDays] = useState([])
    const [gotData, setGotData] = useState(false)

    useEffect(() => {
        async function func() {
            var arr = []
            await db.collection("class").doc("Advanced Physics").collection("topics").get().then((docs) => {
                docs.forEach((doc) => {
                    // getTopicData(doc.data().topicName)
                    arr.push(doc.data())
                    setClassNamesData(oldArray => [...oldArray, doc.data()])
                })
            }).then(() => {
                getTopicData(arr[0].topicName)
            })
        }

        func()
    }, [])

    const getTopicData = async (topicName) => {
        console.log("HEREs")
        console.log(topicName)

        var dayArr = []
        var homeworkArr = []
        var extrasArr = []
        var videosArr = []

        const ref = db.collection("class").doc("Advanced Physics").collection("topics").doc(topicName).collection("days")

        var days = await ref.get()

        days.docs.forEach(async (doc, i) => {
            console.log(doc.data())
            console.log((i + 1).toString())

            setDays(old => [...old, doc.data()])

            var homeworkBlah = await ref.doc((i + 1).toString()).collection("homework").get()
            console.log("OIUYFGEWFYG")
            console.log(homeworkBlah)

            var num = 0                
            var arr = []

            homeworkBlah.docs.forEach((doc) => {
                console.log("HERERER")
                console.log(doc.data())
                arr.push(doc.data())
                console.log(arr)
                if(homeworkBlah.docs.length === num + 1){
                    console.log("Changed Got")

                }
                num += 1

            })
            console.log("OUˇSIDE")
            console.log(arr)

            setHomework(old => [...old, arr])
            setGotData(true)


        })

    }

    return (
        <div className="bg-glass h-screen">
            <Navbar history={history} />

            <div className="mt-10 mb-10">
                <p className="text-5xl text-center">Advanced Physics</p>
            </div>

            <div className="flex mr-48 ml-48 justify-center items-center space-x-2 mb-10">
                <div className="flex overflow-x-scroll scrollbar-hide">
                    {
                        classNamesData.map((doc, index) => {
                            if (index === classNamesData.length) {
                                return (
                                    <TopicCard key={doc.topicName} name={doc.topicName} clicked={false} last={true} />
                                )
                            } else if (index === 0) {
                                return (
                                    <TopicCard key={doc.topicName} name={doc.topicName} clicked={true} last={false} />
                                )
                            } else {
                                return (
                                    <TopicCard key={doc.topicName} name={doc.topicName} clicked={false} last={false} />
                                )
                            }
                            // console.log(doc.topicName)
                            // return (
                            //     <TopicCard key={doc.topicName} name={doc.topicName} clicked={false} last={false} />
                            //     )

                        })
                    }
                    {/* <TopicCard name="1D Motion" clicked={true} last={false} /> */}

                    {/* <TopicCard name="1D Motion" clicked={false} last={false} />
                    <TopicCard name="1D Motion" clicked={false} last={false} />
                    <TopicCard name="1D Motion" clicked={false} last={false} />
                    <TopicCard name="1D Motion" clicked={false} last={false} />
                    <TopicCard name="1D Motion" clicked={false} last={false} />
                    <TopicCard name="1D Motion" clicked={false} last={false} />
                    <TopicCard name="1D Motion" clicked={false} last={false} />
                    <TopicCard name="1D Motion" clicked={false} last={false} />
                    <TopicCard name="1D Motion" clicked={false} last={true} /> */}
                </div>
                <div className="-mt-2">
                    <ArrowForwardIcon />
                </div>
            </div>
            {
                gotData &&
                <div className="grid grid-cols-3 gap-4">
                    {
                        days.map((doc, i) => {
                            console.log("HOMEWORK")
                            console.log(i)
                            console.log(homework)
                            console.log(homework[i])
                            return (
                                <DayCard key={i} name={doc.dayName} day={doc.dayNum} homework={[homework[i]]} />

                            )
                        })
                    }

                </div>
            }

        </div>
    )
}

export default AdvPhysics
