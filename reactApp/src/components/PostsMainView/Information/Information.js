import React from "react";
import { StyledInformation } from "./Information.styled";


export default function Information(props) {

    if (props.visible) {
        return (<StyledInformation>
            <h3>There are no posts available yet, be the first to post something!</h3>
        </StyledInformation>)

    }
    else {
        return null
    }

}