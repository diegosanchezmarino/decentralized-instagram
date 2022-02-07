import React, { Component } from 'react';
import { loadPosts } from '../../utilities/helpers/PostLoader.js';
import Loader from '../Loader/Loader.js';
import { getPostCreatedSubscriptionEvent, getPostTippedSubscriptionEvent } from '../../api/BlockchainApi.js';
import { parseNewPostEvent, parseNewPostTippedEvent } from '../../utilities/helpers/Parser';
import { StyledPostsMainView } from './PostsMainView.styled.js';
import Information from './Information/Information.js';
import PostList from './PostList/PostList.js';
import { MetamaskStatus } from '../../App.js';

class PostsMainView extends Component {


    constructor(props) {
        super(props)
        this.state = {
            posts: null,
            morePostsAvailable: false,
            isLoading: false
        }
        this.loadMorePosts = this.loadMorePosts.bind(this)
    }

    postCreatedEvents = null
    postTippedEvents = null

    prevProps = {
        state: {
            account: ''
        }
    }

    componentDidMount() {
        this.postCreatedEvents = getPostCreatedSubscriptionEvent()
        this.postCreatedEvents.on('data', newPostEvent => {
            const newPost = parseNewPostEvent(newPostEvent)
            const postAlreadyExists = this.state.posts.find(post => post.id === newPost.id)
            if (!postAlreadyExists) {
                this.setState({ posts: [...[newPost], ...this.state.posts] })
            }
            else {
                console.log("Post already in list")
            }
        })

        this.postTippedEvents = getPostTippedSubscriptionEvent()
        this.postTippedEvents.on('data', newPostTippedEvent => {
            const newPostTipped = parseNewPostTippedEvent(newPostTippedEvent)
            const postIndex = this.state.posts.findIndex((post) => post.id === newPostTipped.id)
            if (postIndex !== -1) {
                this.setState(({ posts }) => ({
                    posts: [
                        ...posts.slice(0, postIndex),
                        {
                            ...posts[postIndex],
                            tipAmount: newPostTipped.tipAmount,
                        },
                        ...posts.slice(postIndex + 1)
                    ]
                }));
            }
            else {
                console.log("Post already in list")
            }
        })
    }

    componentWillUnmount() {
        this.postCreatedEvents.unsubscribe(function (error, success) {
            if (success)
                console.log('Successfully unsubscribed!');
        });
        this.postTippedEvents.unsubscribe(function (error, success) {
            if (success)
                console.log('Successfully unsubscribed!');
        });
    }

    componentDidUpdate() {
        console.log(this.props.state)
        if (this.props.state.account && (this.props.state.account !== this.prevProps.state.account)) {
            this.loadMorePosts()
            console.log(this.props.state)
        }
        this.prevProps = this.props
    }


    loadMorePosts() {
        this.setState({ isLoading: true })
        console.log("Loading posts")
        loadPosts().then(result => {
            console.log(result)
            this.updateNewPosts(result)

        }).catch(error => {
            console.log(error)
            this.setState({ isLoading: false })
        })
    }

    updateNewPosts(newPosts) {
        var morePostsAvailable

        console.log(newPosts)
        if (newPosts.length === 0 || newPosts[newPosts.length - 1].id === "1") {
            morePostsAvailable = false
        }
        else {
            morePostsAvailable = true
        }

        if (this.state.posts === null) {
            this.setState({ morePostsAvailable, posts: newPosts, isLoading: false })
        }
        else {
            this.setState({ morePostsAvailable, posts: [...this.state.posts, ...newPosts], isLoading: false })
        }
    }

    render() {
        if (this.props.state.metamaskStatus === MetamaskStatus.Ready) {
            return (
                <StyledPostsMainView>
                    <Loader visible={this.state.posts === null} />
                    <Information visible={this.state.posts != null && this.state.posts.length === 0} />
                    <PostList isLoading={this.state.isLoading} loadMorePosts={this.loadMorePosts} state={this.props.state} posts={this.state.posts} morePostsAvailable={this.state.morePostsAvailable} />
                </StyledPostsMainView>
            );
        }
        else {
            return null
        }
    }

}
export default PostsMainView;

