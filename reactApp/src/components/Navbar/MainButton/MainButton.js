import React from 'react';
import { StyledMainButton } from './MainButton.styled'
import { MetamaskStatus } from '../../../App';

export default function MainButton(props) {


    if (props.state.metamaskStatus === MetamaskStatus.NotInstalled || props.state.metamaskStatus === MetamaskStatus.WrongNetwork) {
        return (
            <StyledMainButton onClick={() => onClickAction(props)}>
                {getContent(props.state.metamaskStatus)}
            </StyledMainButton>
        )
    }
    else {
        return (null)
    }


    function getContent() {
        if (props.state.metamaskStatus === MetamaskStatus.NotInstalled) {
            return "Loading"
        }
        else if (props.state.metamaskStatus === MetamaskStatus.WrongNetwork) {
            return "Switch Network"
        }
    }

    function onClickAction(props) {
        if (props.state.metamaskStatus === MetamaskStatus.WrongNetwork) {
            props.switchNetwork()
        }
        else if (props.state.metamaskStatus === MetamaskStatus.NotConnected) {
            props.connectWallet()
        }
    }
}

