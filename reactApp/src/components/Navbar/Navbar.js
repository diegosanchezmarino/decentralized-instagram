import React, { Component } from 'react';
import { RightStack, StyledNavBar } from './Navbar.styled'
import logo from '../../assets/logo.png'
import MainButton from './MainButton/MainButton.js'
import AccountInfo from './AccountInfo/AccountInfo.js';
import NewPostButton from '../PostsMainView/NewPostButton/NewPostButton';
import ShareModal from '../Modal/ShareModal';
import { MetamaskStatus } from '../../App';


class Navbar extends Component {


  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false
    };

    this.setModalState = this.setModalState.bind(this)
  }

  setModalState(isModalVisible) {
    this.setState({ isModalVisible })
  }


  render() {
    if (this.props.state.metamaskStatus === MetamaskStatus.Ready) {
      return (
        <StyledNavBar>
          <img alt={"logo"} src={logo} />
          <ShareModal state={this.props.state} show={this.state.isModalVisible} setModalState={this.setModalState} />
          <RightStack>
            <NewPostButton state={this.props.state} onClick={() => { this.setModalState(true) }} />
            <MainButton state={this.props.state} switchNetwork={this.props.switchNetwork} />
            <AccountInfo state={this.props.state} />
          </RightStack>
        </StyledNavBar >

      )
    }
    else {
      return null
    }

  }

}
export default Navbar;

