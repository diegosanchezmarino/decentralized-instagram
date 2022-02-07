import React from "react";
import { StyledLoadMoreButton } from "./LoadMoreButton.styled";

export default function LoadMoreButton(props) {


    if (props.visible && !props.isLoading) {
        return (
            <StyledLoadMoreButton onClick={(event) => { props.loadMorePosts() }}>
                Load More
            </StyledLoadMoreButton>
        )
    }
    else if ((props.visible && props.isLoading)) {
        return (
            <StyledLoadMoreButton  >
                Loading...
            </StyledLoadMoreButton>
        )
    }
    else {
        return (null)
    }

}