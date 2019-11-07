import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

function Error(props) {
    return (
        <div className="row text-center">
            <div className="col">

                <h4>Error while fetching data.</h4>
                {props.retry && <span className="react-hn-error-retry" onClick={props.retry}>Retry</span>}

            </div>
        </div>
    )
}

Error.propTypes = {
    retry: PropTypes.func
}


export default Error
