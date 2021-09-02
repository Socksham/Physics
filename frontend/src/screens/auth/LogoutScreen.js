import React, {useEffect} from 'react'
import { auth } from '../../utils/Firebase'

const LogoutScreen = ({history}) => {
    useEffect(() => {
        async function func() {
            await auth.signOut()
            history.push("/login")
        }

        func()
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default LogoutScreen
