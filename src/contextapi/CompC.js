import React from 'react'
import { FirstName, LastName } from '../App'
import CompB from './CompB'

function CompC() {
    return (
        <div>
            {/* consumer of context api for fetching value of firstname */}
            {/* consumer expect only function */}
            <FirstName.Consumer>{(firstname) => {
                return (
                    <LastName.Consumer>
                        {(lastname) => {
                            return (
                                <h1>
                                    My name is from consumer {firstname} {lastname}
                                </h1>
                            )
                        }}
                    </LastName.Consumer>
                )
            }}

            </FirstName.Consumer>
            <CompB />
        </div>
    )
}

export default CompC
