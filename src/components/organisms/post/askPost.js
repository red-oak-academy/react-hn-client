import React, {Fragment} from 'react'
import {Link} from "react-router-dom"

function AskPost(props) {
    return (
        <Fragment>
            <div className="col">
                <div className="row">
                    <Link className="react-hn-post-url" to={`post/${props.id}`}>{props.title}</Link>
                </div>
                <div className="row react-hn-post-sub">
                    {`${props.points} points by ${props.user} 2 hours ago | hide | ${props.comments_count} comments`}
                </div>
            </div>
        </Fragment>
    )
}

export default AskPost
