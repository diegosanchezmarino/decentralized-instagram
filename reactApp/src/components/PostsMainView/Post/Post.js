import React, { Component } from 'react';
import Identicon from 'identicon.js';
import Web3 from 'web3';
import { StyledPost, TipsInformation, Header, MainImage, Footer, Description, TipButton, Actions } from './Post.styled';
import { tipPostOwner } from '../../../api/BlockchainApi';
import payIcon from '../../../assets/paid_black_24dp.svg'

class Post extends Component {

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

    tip() {
        let tipAmount = new Web3(window.ethereum).utils.toWei('0.1', 'Ether')
        tipPostOwner(this.props.post.id, tipAmount, this.props.state.account)
    }

    render() {
        return (
            <StyledPost>
                <Header>
                    <img alt={"address icon"} src={`data:image/png;base64,${new Identicon(this.props.post.author, 30).toString()}`} />
                    <p>{this.props.post.author}</p>
                </Header>
                <MainImage >
                    <img alt={"post"} src={`https://ipfs.infura.io/ipfs/${this.props.post.hash}`} />
                </MainImage>
                <Footer>
                    <Actions>
                        <TipButton src={payIcon} onClick={(event) => { this.tip() }} />
                    </Actions>
                    <Description>
                        {this.props.post.description}
                    </Description >
                    <TipsInformation>
                        <p>Tips: {new Web3(window.ethereum).utils.fromWei(this.props.post.tipAmount.toString(), 'Ether')} ETH</p>
                    </TipsInformation>
                </Footer>
            </StyledPost>
        )
    }

}

export default Post;