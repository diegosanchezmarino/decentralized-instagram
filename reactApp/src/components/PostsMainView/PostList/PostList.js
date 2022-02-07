import React, { Component } from 'react';
import { StyledPostList } from './PostList.styled';
import Post from '../Post/Post';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';


class PostList extends Component {



    render() {
        return (this.getRender())

    }


    getRender() {
        if (this.props.posts != null) {
            return (
                <StyledPostList>
                    {this.props.posts.map((post, key) => {
                        return <Post state={this.props.state} post={post} key={key} />
                    })}
                    <LoadMoreButton isLoading={this.props.isLoading} loadMorePosts={this.props.loadMorePosts} visible={this.props.morePostsAvailable} />
                </StyledPostList>
            )
        }
        else {
            return null
        }



    }
}
export default PostList;

