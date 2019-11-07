import React, { Fragment } from 'react'
import { Link } from "react-router-dom"

function LinkPost(props) {
    return (
        <Fragment>
            <div className="col">
                <div className="row">
                    {props.url.startsWith("item?id=") ?
                        <Link to={`/post/${props.id}`} className="react-hn-post-url">{props.title}</Link> :
                        <a href={props.url} className="react-hn-post-url">{props.title}</a>}
                    <a href={props.url} className="my-auto ml-1 react-hn-post-domain">
                        {props.domain && `(${props.domain})`}
                    </a>
                </div>

                <div className="row react-hn-post-sub">
                    {`${props.points} points by`}&nbsp;
                    <span className="link">{props.user}</span>&nbsp;{`${props.time_ago} |`}&nbsp;
                    <Link className="link">{`${props.comments_count} comments`}</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default LinkPost
