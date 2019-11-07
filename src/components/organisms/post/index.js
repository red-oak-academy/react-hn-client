import React from 'react'
import PropTypes from 'prop-types';
import LinkPost from './linkPost';
import AskPost from './askPost';
import JobPost from './jobPost';
import "./index.css";


function Post(props) {
    return (
        <div className="row">
            {props.number && <div className="col flex-grow-0 my-auto react-hn-post-number">{`${props.number}.`}</div>}

            {props.type === 'link' && <LinkPost {...props} />}
            {props.type === 'ask' && <AskPost {...props} />}
            {props.type === 'job' && <JobPost {...props} />}
        </div>
    )
}

Post.propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number,
    title: PropTypes.string.isRequired,
    points: PropTypes.number,
    user: PropTypes.string,
    time: PropTypes.number.isRequired,
    time_ago: PropTypes.string.isRequired,
    comments_count: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string,
    domain: PropTypes.string
}

export default Post;
