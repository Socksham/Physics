import React, {useEffect, useContext} from 'react'
import { auth } from '../../utils/Firebase'
import { UserContext } from '../../utils/providers/UserProvider'

const LogoutScreen = ({history}) => {

    const user = useContext(UserContext)

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
