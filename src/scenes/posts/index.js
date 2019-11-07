import React, { Component } from 'react'
import PostsTemplate from '../../components/templates/posts'
import HnApi from '../../api/hnApi'
import PropTypes from 'prop-types'

class PostsScene extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            postsLoading: true
        }
    }

    fetchNews = (section, page) => {
        HnApi.getNewsFeed(section, page)
            .then((data) => this.setState({ posts: data, postsLoading: false }))
            .catch(console.log);
    }

    componentDidMount() {
        this.fetchNews(this.props.postsSection, this.props.page);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.postsSection !== this.props.postsSection || prevProps.page !== this.props.page) {
            this.fetchNews(this.props.postsSection, this.props.page);
        }
    }

    render() {
        return (
            <PostsTemplate
                posts={this.state.posts}
                postsLoading={this.state.postsLoading}
                postsSection={this.props.postsSection}
                currentPage={this.props.page && parseInt(this.props.page)}
            />
        )
    }
}

PostsScene.propTypes = {
    postsSection: PropTypes.string.isRequired,
    page: PropTypes.string
}

PostsScene.defaultProps = {
    Section: "news"
}

export default PostsScene