import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../../components/Navbar'
import TopicCard from '../../components/TopicCard'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { db } from "../../utils/Firebase"
import DayCard from '../../components/DayCard';
import DayCardLoader from '../../components/DayCardLoader';
import TopicCardLoader from '../../components/TopicCardLoader';
import { UserContext } from '../../utils/providers/UserProvider';

const AdvPhysics = ({ history }) => {
    const [classNamesData, setClassNamesData] = useState([])
    const [homework, setHomework] = useState([])
    const [extras, setExtras] = useState([])
    const [days, setDays] = useState([])
    const [gotData, setGotData] = useState(false)
    const [gotTopics, setTopics] = useState(false)
    const [index, setIndex] = useState(0)
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const user = useContext(UserContext)

    useEffect(() => {
        
        async function func() {
            
            if(user){
                setIsLoggedIn(true)

                console.log("THERE WAS A USER")
                const ref = await db.collection("users").doc(user.email).get()
                if(ref.data().authenticated){
                    var arr = []
                    await db.collection("class").doc("Physics").collection("topics").get().then((docs) => {
                        docs.forEach((doc) => {
                            // getTopicData(doc.data().topicName)
                            arr.push(doc.data())
                            setClassNamesData(oldArray => [...oldArray, doc.data()])
                        })
                    }).then(() => {
                        getTopicData(arr[0].topicName)
                    })
                }else{
                    history.push("/entercode")
                }
            }else{
                // history.push("/login")
                console.log("no user")
            }
        }

        func()
    }, [user])

    const getTopicDataBtn = async (topicName) => {

        console.log("GOT CALLED")
        console.log(topicName)

        const ref = db.collection("class").doc("Physics").collection("topics").doc(topicName).collection("days")

        var days = await ref.get()

        var totalHWArr = []
        var totalExtrasArr = []

        setHomework([])
        setExtras([])
        setDays([])

        days.docs.forEach(async (doc, i) => {

            var arr = []
            var extrasArr = []

            console.log(arr)

            var homeworkBlah = await ref.doc((i + 1).toString()).collection("homework").get()

            var extrasBlah = await ref.doc((i + 1).toString()).collection("extras").get()


            homeworkBlah.docs.forEach((doc) => {
                console.log(doc.data())
                arr.push(doc.data())
                console.log(arr)
            })

            extrasBlah.docs.forEach((doc) => {
                extrasArr.push(doc.data())
            })




            totalHWArr.push(arr)
            totalExtrasArr.push(extrasArr)
            console.log("ARRAYS")
            console.log(totalHWArr)

            // totalExtrasArr.push([1, 2])

            // console.log(totalHWArr, totalExtrasArr)

            setDays(old => [...old, doc.data()])


        })

        setHomework(totalHWArr)
        setExtras(totalExtrasArr)

        setGotData(true)
    }

    const getTopicData = async (topicName) => {

        console.log("GOT CALLED")
        console.log(topicName)

        setTopics(false)

        const ref = db.collection("class").doc("Physics").collection("topics").doc(topicName).collection("days")

        var days = await ref.get()

        var totalHWArr = []
        var totalExtrasArr = []


        days.docs.forEach(async (doc, i) => {

            var arr = []
            var extrasArr = []

            console.log(arr)

            var homeworkBlah = await ref.doc((i + 1).toString()).collection("homework").get()

            var extrasBlah = await ref.doc((i + 1).toString()).collection("extras").get()


            homeworkBlah.docs.forEach((doc) => {
                console.log(doc.data())
                arr.push(doc.data())
                console.log(arr)
            })

            extrasBlah.docs.forEach((doc) => {
                extrasArr.push(doc.data())
            })




            totalHWArr.push(arr)
            totalExtrasArr.push(extrasArr)
            console.log("ARRAYS")
            console.log(totalHWArr)

            // totalExtrasArr.push([1, 2])

            // console.log(totalHWArr, totalExtrasArr)

            setDays(old => [...old, doc.data()])


        })

        setHomework(totalHWArr)
        setExtras(totalExtrasArr)

        setTopics(true)

        setGotData(true)
    }

    return (
        <div className="bg-glass h-screen">
            <Navbar history={history} isLoggedIn={isLoggedIn}/>

            <div className="mt-10 mb-10">
                <p className="text-5xl text-center">Physics</p>
            </div>

            <div className="flex mr-48 ml-48 justify-center items-center space-x-2 mb-10">
                {
                    !gotTopics ?
                        <TopicCardLoader />
                        :
                        <div className="flex overflow-x-scroll scrollbar-hide items-center">
                            {
                                classNamesData.map((doc, i) => {

                                    if (i === classNamesData.length) {
                                        if(i === index){
                                            return (
                                                <div onClick={() => { setIndex(i) }} key={doc.topicName}>
                                                    <TopicCard key={doc.topicName} name={doc.topicName} clicked={true} last={true} setTopic={getTopicDataBtn} />
                                                </div>
    
                                            )
                                        }else{
                                            return (
                                                <div onClick={() => { setIndex(i) }} key={doc.topicName}>
                                                    <TopicCard key={doc.topicName} name={doc.topicName} clicked={false} last={true} setTopic={getTopicDataBtn} />
                                                </div>
    
                                            )
                                        }
                                        
                                    }else {
                                        if(i === index){
                                            return (
                                                <div onClick={() => { setIndex(i) }} key={doc.topicName}>
                                                    <TopicCard key={doc.topicName} name={doc.topicName} clicked={true} last={false} setTopic={getTopicDataBtn} />
                                                </div>
    
                                            )
                                        }else{
                                            return (
                                                <div onClick={() => { setIndex(i) }} key={doc.topicName}>
                                                    <TopicCard key={doc.topicName} name={doc.topicName} clicked={false} last={false} setTopic={getTopicDataBtn} />
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

            <div className="pl-48 mb-8">
                <p className="text-3xl font-semibold">Days</p>
            </div>

            {
                gotData ?
                    <div className="grid grid-cols-3 col-end-auto auto-rows-fr gap-4 pl-48 pr-48">
                        {
                            days.map((doc, i) => {
                                return (
                                    // <DayCardLoader />
                                    <DayCard key={i} name={doc.dayName} day={doc.dayNum} homework={[homework[i]]} extras={[extras[i]]} />

                                )
                            })
                        }
                    </div>

                    :
                    <div className="grid grid-cols-3 col-end-auto auto-rows-fr gap-4 pl-48 pr-48">
                        <DayCardLoader />
                        <DayCardLoader />
                        <DayCardLoader />
                        <DayCardLoader />
                        <DayCardLoader />
                    </div>

            }

        </div>
    )
}

export default AdvPhysics
