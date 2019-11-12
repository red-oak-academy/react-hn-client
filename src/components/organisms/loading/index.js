import React from 'react'
import PropTypes from "prop-types"

function Loading(props) {
    return (
        <div className="row">
            <div className="col">
                <h5 className="text-center">{props.text ? props.text : "Loading..."}</h5>
            </div>
        </div>
    )
}

Loading.propTypes = {
    text: PropTypes.string
}

export default Loading
