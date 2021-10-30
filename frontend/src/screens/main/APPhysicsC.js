import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../../components/Navbar'
import TopicCard from '../../components/TopicCard'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { db } from "../../utils/Firebase"
import DayCard from '../../components/DayCard';
import DayCardLoader from '../../components/DayCardLoader';
import TopicCardLoader from '../../components/TopicCardLoader';

const AdvPhysics = ({ history }) => {
    const color = "yellow"
    const [classNamesData, setClassNamesData] = useState([])
    const [homework, setHomework] = useState([])
    const [extras, setExtras] = useState([])
    const [days, setDays] = useState([])
    const [gotData, setGotData] = useState(false)
    const [gotTopics, setTopics] = useState(false)
    const [index, setIndex] = useState(0)

    useEffect(() => {

        async function func() {

            var arr = []
            await db.collection("class").doc("AP Physics C").collection("topics").get().then((docs) => {
                docs.forEach((doc) => {
                    arr.push(doc.data())
                    setClassNamesData(oldArray => [...oldArray, doc.data()])
                })
            }).then(() => {
                if (arr[0]) {
                    getTopicData(arr[0].topicName)
                } else {
                    setGotData(true)
                    setTopics(true)
                }
            })

        }

        func()
    }, [])

    const getTopicDataBtn = async (topicName) => {


        const ref = db.collection("class").doc("AP Physics C").collection("topics").doc(topicName).collection("days")

        var days = await ref.get()

        var totalHWArr = []
        var totalExtrasArr = []

        setHomework([])
        setExtras([])
        setDays([])

        days.docs.forEach(async (doc, i) => {

            var arr = []
            var extrasArr = []

            var homeworkBlah = await ref.doc((i + 1).toString()).collection("homework").get()

            var extrasBlah = await ref.doc((i + 1).toString()).collection("extras").get()


            homeworkBlah.docs.forEach((doc) => {
                arr.push(doc.data())
            })

            extrasBlah.docs.forEach((doc) => {
                extrasArr.push(doc.data())
            })




            totalHWArr.push(arr)
            totalExtrasArr.push(extrasArr)

            // totalExtrasArr.push([1, 2])

            // console.log(totalHWArr, totalExtrasArr)

            setDays(old => [...old, doc.data()])


        })

        setHomework(totalHWArr)
        setExtras(totalExtrasArr)

        setGotData(true)
    }

    const getTopicData = async (topicName) => {


        setTopics(false)

        const ref = db.collection("class").doc("AP Physics C").collection("topics").doc(topicName).collection("days")

        var days = await ref.get()

        var totalHWArr = []
        var totalExtrasArr = []


        days.docs.forEach(async (doc, i) => {

            var arr = []
            var extrasArr = []


            var homeworkBlah = await ref.doc((i + 1).toString()).collection("homework").get()

            var extrasBlah = await ref.doc((i + 1).toString()).collection("extras").get()


            homeworkBlah.docs.forEach((doc) => {
                arr.push(doc.data())
            })

            extrasBlah.docs.forEach((doc) => {
                extrasArr.push(doc.data())
            })




            totalHWArr.push(arr)
            totalExtrasArr.push(extrasArr)

            // totalExtrasArr.push([1, 2])

            // console.log(totalHWArr, totalExtrasArr)

            setDays(old => [...old, doc.data()])


        })

        setHomework(totalHWArr)
        setExtras(totalExtrasArr)

        setTopics(true)

        setGotData(true)
    }

    //TODO: NEED TO MAKE ARROW SHOW UP ON SIDE OF TOPICS ON IN TOPICS

    return (
        <div className="bg-glass min-h-screen h-full pb-16">
            <Navbar history={history} />

            <div className="mt-10 mb-10">
                <p className="text-3xl md:text-5xl text-center">AP Physics C</p>
            </div>
            <div className="flex mr-10 ml-10 md:mr-48 md:ml-48 justify-center items-center space-x-2 mb-10">
                {
                    !gotTopics ?
                        <TopicCardLoader />
                        :
                        <div className="flex overflow-x-scroll scrollbar-hide items-center">
                            {
                                classNamesData.map((doc, i) => {

                                    if (i === classNamesData.length) {
                                        if (i === index) {
                                            return (
                                                <div onClick={() => { setIndex(i) }} key={doc.topicName}>
                                                    <TopicCard key={doc.topicName} name={doc.topicName} clicked={true} last={true} setTopic={getTopicDataBtn} color={color}/>
                                                </div>

                                            )
                                        } else {
                                            return (
                                                <div onClick={() => { setIndex(i) }} key={doc.topicName}>
                                                    <TopicCard key={doc.topicName} name={doc.topicName} clicked={false} last={true} setTopic={getTopicDataBtn} color={color}/>
                                                </div>

                                            )
                                        }

                                    } else {
                                        if (i === index) {
                                            return (
                                                <div onClick={() => { setIndex(i) }} key={doc.topicName}>
                                                    <TopicCard key={doc.topicName} name={doc.topicName} clicked={true} last={false} setTopic={getTopicDataBtn} color={color}/>
                                                </div>

                                            )
                                        } else {
                                            return (
                                                <div onClick={() => { setIndex(i) }} key={doc.topicName}>
                                                    <TopicCard key={doc.topicName} name={doc.topicName} clicked={false} last={false} setTopic={getTopicDataBtn} color={color}/>
                                                </div>

                                            )
                                        }

                                    }

                                })
                            }
                            <div className="mt-1">
                                <ArrowForwardIcon />
                            </div>
                        </div>
                }



            </div>


            <div className="lg:pl-48 lg:pr-48 md:pl-20 md:pr-20 pl-10 pr-10">
                <div className="mb-8">
                    <p className="text-3xl font-semibold">Days</p>
                </div>
                {
                    gotData ?
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">

                            {
                                days.map((doc, i) => {
                                    return (
                                        <DayCard key={i} name={doc.dayName} day={doc.dayNum} homework={[homework[i]]} extras={[extras[i]]} color={color} />
                                    )
                                })
                            }

                            {/* {
                                days.map((doc, i) => {
                                    var arr = []
                                    var rowArr = []
                                    var homeworkArrIn = []
                                    var extrasArrIn = []
                                    arr.push(doc)
                                    homeworkArrIn.push(homework[i])
                                    extrasArrIn.push(extras[i])
                                    console.log(i)
                                    if ((i + 1) % 3 === 0) {
                                        console.log("PUSHED")
                                        rowArr.push(<DayRow days={arr} homework={homeworkArrIn} extras={extrasArrIn} />)
                                        arr = []
                                        homeworkArrIn = []
                                        extrasArrIn = []
                                    }
                                    console.log("RIW")
                                    console.log(rowArr)
                                    return (
                                        rowArr.forEach((row) => {
                                            return row
                                        })
                                    )
                                })
                            } */}
                        </div>

                        :
                        <div className="grid grid-cols-3 col-end-auto auto-rows-fr gap-4">
                            <DayCardLoader />
                            <DayCardLoader />
                            <DayCardLoader />
                            <DayCardLoader />
                            <DayCardLoader />
                        </div>

                }
            </div>


        </div>
    )
}

export default AdvPhysics
