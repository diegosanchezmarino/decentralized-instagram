import React, { Component } from 'react';
import { StyledSelectImageView, Title, Image, Button } from './SelectImageView.styled';
import imagesIcon from '../../../../assets/images_icon.svg'

class SelectImageView extends Component {

    render() {
        return (
            <StyledSelectImageView>
                <Title>
                    {this.props.state.title}
                </Title>
                <Image>
                    <img alt='description' src={imagesIcon} />
                </Image>
                <input ref={(input) => (this.inputElement = input)} id="selectFile" type='file' accept=".jpg, .jpeg, .png, .bmp" style={{ display: 'none' }} onChange={this.props.captureFile} />
                <Button onClick={() => this.inputElement.click()} >Select from hard drive</Button>
            </StyledSelectImageView >

        )
    }
}
export default SelectImageView;
// ref={(input) => (this.inputElement = input)} 