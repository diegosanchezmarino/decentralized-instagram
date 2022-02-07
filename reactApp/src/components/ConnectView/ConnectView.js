import React, { Component } from 'react';
import { StyledConnectView, MainImage, Connect } from './ConnectView.styled';
import logo from '../../assets/logo.png'
import { MetamaskStatus } from '../../App';

class ConnectView extends Component {


    render() {
        if (this.props.state.metamaskStatus === MetamaskStatus.NotConnected || this.props.state.metamaskStatus === MetamaskStatus.WrongNetwork) {
            return (
                <StyledConnectView>
                    <MainImage src={logo} />
                    <Connect>
                        {this.getInformation()}
                        <button onClick={() => this.handleButtonClick()}>{this.getButtonText()}</button>
                    </Connect>
                </StyledConnectView >
            );
        }
        else {
            return null
        }

    }



    getButtonText() {
        if (this.props.state.metamaskStatus === MetamaskStatus.NotConnected) {
            return "Connect"
        }
        else if (this.props.state.metamaskStatus === MetamaskStatus.WrongNetwork) {
            return "Switch network"
        }
    }

    getInformation() {
        if (this.props.state.metamaskStatus === MetamaskStatus.WrongNetwork) {
            return <h6>Wrong network...</h6>
        }
    }

    handleButtonClick() {
        if (this.props.state.metamaskStatus === MetamaskStatus.WrongNetwork) {
            this.props.switchNetwork()
        }
        else if (this.props.state.metamaskStatus === MetamaskStatus.NotConnected) {
            this.props.connectWallet()
        }



    }
}
export default ConnectView;

