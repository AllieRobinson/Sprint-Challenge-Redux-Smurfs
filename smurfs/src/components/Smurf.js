import React from 'react'

const Smurf = ({ smurf }) => {
    return (
        <div>
            <li>{smurf.name}</li>
            <li>{smurf.age}</li>
            <li>{smurf.height}</li>
        </div>
    )
}

export default Smurf
