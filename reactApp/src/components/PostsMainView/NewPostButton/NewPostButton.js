import React from "react";
import { StyledNewPostButton } from "./NewPostButton.styled";
import newPostIcon from '../../../assets/new_post_icon.svg'
import { MetamaskStatus } from '../../../App'

export default function NewPostButton(props) {

    if (props.state.metamaskStatus === MetamaskStatus.Ready) {
        console.log("Showing post button", props)
        return (
            <StyledNewPostButton src={newPostIcon} onClick={() => props.onClick()} />
        )
    }
    else {
        console.log("Hiding post button", props)
        return null
    }
}
