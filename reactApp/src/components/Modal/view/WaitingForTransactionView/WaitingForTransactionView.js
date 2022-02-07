import React, { Component } from 'react';
import { StyledWaitingForTransactionView, Title } from './WaitingForTransactionView.styled';

class WaitingForTransactionView extends Component {


    render() {
        return (
            <StyledWaitingForTransactionView>
                <Title>
                    {this.props.state.title}
                </Title>
                <h4>You need to approve the transaction, please check metamask</h4>
            </StyledWaitingForTransactionView >
        )
    }
}
export default WaitingForTransactionView;