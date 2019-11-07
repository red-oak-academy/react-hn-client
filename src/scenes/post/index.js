import React from 'react'
import PropTypes from 'prop-types'
import PostTemplate from '../../components/templates/post'
import { useAPI } from '../../utils/useAPI'
import HnApi from '../../api/hnApi'

function PostScene(props) {

    const [post, loading, error, retry] = useAPI(HnApi.getPostDetails, props.postId);

    return (
        <PostTemplate
            loading={loading}
            error={error}
            retry={retry}
            post={post}
        />
    )
}

PostScene.propTypes = {
    postId: PropTypes.number.isRequired
}

export default PostScene
