import React from 'react'

function User ({ details }){
    return (
        <div className= 'user-container'>
            <pre> {JSON.stringify(details, null, 2)}</pre>
            {console.log(details)}
        </div>
    )
}

export default User