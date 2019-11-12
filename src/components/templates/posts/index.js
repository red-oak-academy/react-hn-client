import React, {Fragment} from 'react'
import PropTypes from "prop-types";
import Post from "../../organisms/post";
import Pagination from "../../organisms/pagination";
import LoadingPosts from '../../organisms/loadingPosts';
import NoPosts from '../../organisms/noPosts';

const maxPages = {
    "news": 10,
    "newest": 10,
    "ask": 2,
    "show": 2,
    "jobs": 1
}

function PostsTemplate(props) {
    return (
        <Fragment>
            <div style={{position: "relative"}}>
                {props.postsLoading && props.posts.length === 0 && <LoadingPosts/>}
                {!props.postsLoading && props.posts.length === 0 && <NoPosts/>}

                {props.posts.map((news, idx) => <Post key={props.id} {...news} />)}
            </div>

            <Pagination currentPage={props.currentPage} maxPage={maxPages[props.postsSection] || 10} pageSpread={2}
                        postsSection={props.postsSection}/>
        </Fragment>
    )
}

PostsTemplate.propTypes = {
    posts: PropTypes.array.isRequired,
    postsLoading: PropTypes.bool,
    postsSection: PropTypes.string.isRequired,
    currentPage: PropTypes.number.isRequired
}

PostsTemplate.defaultProps = {
    currentPage: 1
}

export default PostsTemplate
