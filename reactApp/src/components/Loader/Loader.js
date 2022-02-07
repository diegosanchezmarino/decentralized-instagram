import React from "react"
import { StyledLoader, Wheel, Text } from "./Loader.styled"

export default function Loader(props) {

    if (props.visible) {
        return (
            <StyledLoader>
                <Wheel />
                <Text />
            </StyledLoader>
        )
    }
    else {
        return (null)
    }


}