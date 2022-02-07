import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { createPost } from '../../utilities/helpers/PostLoader';
import SelectImageView from './view/SelectImageView/SelectImageView';
import AddDescriptionView from './view/AddDescriptionView/AddDescriptionView';
import WaitingForTransactionView from './view/WaitingForTransactionView/WaitingForTransactionView';

export const ModalStatus = {
    Idle: 0,
    ImageSelected: 1,
    DescriptionReady: 2,
    WaitingForMetamask: 3,
}


class ShareModal extends Component {


    buffer = ''
    description = ""


    constructor(props) {
        super(props)
        this.state = {
            status: ModalStatus.Idle,
            title: 'Create new post',
            imagePreview: ""
        }
        this.description = ""
        this.upload = this.upload.bind(this)
    }


    captureFile = event => {


        event.preventDefault()
        const file = event.target.files[0]


        const imagePreview = URL.createObjectURL(event.target.files[0])
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)

        reader.onloadend = () => {
            this.buffer = Buffer(reader.result)
            this.setState({ status: ModalStatus.ImageSelected, title: 'Add a description', imagePreview })
        }
    }

    upload(description) {
        this.setState({ status: ModalStatus.WaitingForMetamask, title: "Waiting for transaction" })
        createPost(this.props.state.account, this.buffer, description)
            .then(result => {
                this.onModalHide()
            })
            .catch(error => {

            })
    }

    onModalHide() {
        this.setState({ status: ModalStatus.Idle })
        this.props.setModalState(false)
    }


    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={() => this.onModalHide()}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >
                {this.getScreen()}
            </Modal >
        )
    }

    getScreen() {
        if (this.state.status === ModalStatus.Idle) {
            return <SelectImageView state={this.state} captureFile={this.captureFile} />
        }
        else if (this.state.status === ModalStatus.ImageSelected) {
            return <AddDescriptionView state={this.state} upload={this.upload} />
        }
        else if (this.state.status === ModalStatus.WaitingForMetamask) {
            return <WaitingForTransactionView state={this.state} />
        }
    }
}
export default ShareModal;


