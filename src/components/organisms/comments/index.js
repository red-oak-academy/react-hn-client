import React, {Fragment} from 'react'
import PropTypes from "prop-types"
import Comment from "../comment"

function Comments(props) {
    return (
        <Fragment>
            {props.comments.map(comment => <Comment {...comment}></Comment>)}
        </Fragment>
    )
}

Comments.propTypes = {
    comments : PropTypes.array.isRequired
}

export default Comments
