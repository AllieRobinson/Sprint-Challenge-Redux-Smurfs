import React from 'react'
import { connect } from 'react-redux'
// import Smurf from './Smurf'

const SmurfList = ( { Smurfs } ) => {
    return (
        <div>
            <h1>Smurfs:</h1>
            <ul>
            {Smurfs.map((smurf) => {
                return <Smurf smurf={smurf} key={smurf.i} />
            })}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps)(SmurfList)
