import React from 'react';


import { StyledAccountInfo } from './AccountInfo.styled';
import Identicon from 'identicon.js';
import { MetamaskStatus } from '../../../App';

export default function AccountInfo(props) {

    if (props.state.metamaskStatus === MetamaskStatus.Ready && props.state.account) {
        return (
            <StyledAccountInfo>
                <img alt={"address icon"} src={`data:image/png;base64,${new Identicon(props.state.account, 30).toString()}`} />
                <p>{props.state.account.substring(0, 4) + "..." + props.state.account.substring(props.state.account.length - 5)}</p>
            </StyledAccountInfo>)
    }
    else {
        return (null)
    }



}

