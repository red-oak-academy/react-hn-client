import React, {Fragment, useState, useCallback, useEffect} from 'react'
import PropTypes from "prop-types"
import "./index.css"
import Comments from '../comments'
import sanitize from "../../../utils/sanitize"
import Expansion from "../../atoms/expansion"


function Comment(props) {

    const [expanded, setExpanded] = useState(true);
    const toggleExpansion = useCallback(() => setExpanded(!expanded), [expanded, setExpanded])


    return (
        <div className="react-hn-comment-container">
            <div className="react-hn-comment-info-header">
                <span>{props.user}</span>&nbsp;{props.time_ago}&nbsp;

                <Expansion expanded={expanded} expansionToggleCallback={toggleExpansion}
                           childCount={props.comments_count}/>
            </div>

            {expanded && <div>
                <div className="react-hn-comment-content">
                    <span dangerouslySetInnerHTML={sanitize(props.content)}/>
                </div>
            </div>}

            {expanded && props.comments_count > 0 && <Comments comments={props.comments}/>}
        </div>
    )
}

Comment.propTypes = {
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    time_ago: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    level: PropTypes.number.isRequired
}


export default Comment
