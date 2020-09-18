import React from 'react'

function User ({ details }){
    return (
        <div className= 'user-container'>
            <pre> {JSON.stringify(details, null, 4)}</pre> {/*<pre> preformats teh output data without needing to manualy style it. JSON.stringify() is converting details to JSON, null means no function, and im using a space of 4 */}
            {console.log(details)}
        </div>
    ) 
}

export default User