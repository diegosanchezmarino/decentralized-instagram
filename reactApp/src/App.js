import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js'
import BlockchainConnectionManager from './utilities/helpers/BlockchainConnectionManager'
import { StyledApp } from './App.styled';
import ConnectView from './components/ConnectView/ConnectView';
import PostsMainView from './components/PostsMainView/PostsMainView';


export const MetamaskStatus = {
  Idle: 0,
  NotInstalled: 1,
  WrongNetwork: 2,
  NotConnected: 3,
  Ready: 4
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      metamaskStatus: MetamaskStatus.Idle,
      morePostsAvailable: false
    }




    this.updateState = this.updateState.bind(this)
    this.connectWallet = this.connectWallet.bind(this);
    this.switchNetwork = this.switchNetwork.bind(this);


  }

  async componentDidMount() {
    this.blockchainConnectionManager = new BlockchainConnectionManager(this.updateState);
    this.blockchainConnectionManager.validate()

  }

  connectWallet() {
    this.blockchainConnectionManager.connectWallet()
  }

  switchNetwork() {
    this.blockchainConnectionManager.switchNetwork()
  }

  updateState(newState) {
    this.setState(newState);
  }


  render() {
    return (
      <StyledApp>
        <Navbar notifications={this.state.notifications} updateState={this.updateState} state={this.state} switchNetwork={this.switchNetwork} />
        <ConnectView state={this.state} connectWallet={this.connectWallet} switchNetwork={this.switchNetwork} />
        <PostsMainView updateState={this.updateState} state={this.state} />
      </StyledApp>
    );
  }
}

export default App;