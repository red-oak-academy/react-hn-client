import React, { Fragment } from 'react'
import Post from '../../organisms/post'
import PropTypes from 'prop-types'
import Comments from "../../organisms/comments"
import Error from "../../organisms/error"
import sanitize from '../../../utils/sanitize'
import './index.css'

function PostTemplate(props) {
    return (
        <Fragment>

            {props.error && <Error retry={props.retry} />}

            {props.post && <Fragment>
                <div className="ml-4 mt-2">
                    <Post {...props.post} />
                    <div className="row mt-2 react-hn-post-content" dangerouslySetInnerHTML={sanitize(props.post.content)}></div>
                </div>

                <div className="row m-2">
                    <textarea name="Text1" cols="40" rows="5" disabled value="This app does not support commenting."></textarea>
                </div>

                {<Comments comments={props.post.comments}></Comments>}

            </Fragment>}

        </Fragment>
    )
}

PostTemplate.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.object,
    retry: PropTypes.func,
    post: PropTypes.object
}

export default PostTemplate
