import React from 'react'
import {useLocation, useHistory} from 'react-router-dom'

function PageNotFound() {
    let location = useLocation()
    let history = useHistory()

    return (
        <div>
            <h1>404: The page "{location.pathname}" doesn't exist</h1>
            <button onClick={()=>{
                history.push("/");
            }}>Go back to homepage</button>
        </div>
    )
}

export default PageNotFound
