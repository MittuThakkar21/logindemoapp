import React, { useContext } from 'react'
import { FirstName, LastName } from '../App'
import CompC from './CompC'

function CompB() {

    ///useContext hooks 

    const firstName = useContext(FirstName)
    const lastName = useContext(LastName)

    return (
        <div>
            <h1>This is from useContext hooks {firstName} {lastName}</h1>
        </div>
    )
}

export default CompB