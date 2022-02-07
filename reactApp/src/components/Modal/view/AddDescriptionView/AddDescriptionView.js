import React, { Component } from 'react';
import { StyledAddDescriptionView, Title, Body, Button } from './AddDescriptionView.styled';


class AddDescriptionView extends Component {

    description = "";

    handleChange = event => {

        this.description = event.target.value
    }


    render() {
        return (
            <StyledAddDescriptionView>
                <Title>
                    {this.props.state.title}
                </Title>
                <Body>
                    <img alt='preview' src={this.props.state.imagePreview} />
                    <textarea onChange={this.handleChange}></textarea>
                </Body>
                <Button onClick={() => this.props.upload(this.description)}>Create post</Button>

            </StyledAddDescriptionView >
        )
    }
}
export default AddDescriptionView;