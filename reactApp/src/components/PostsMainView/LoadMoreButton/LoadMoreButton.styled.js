import styled from 'styled-components'

export const StyledLoadMoreButton = styled.button`
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: #0095f6;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 50px;
    color: white;
    
&:hover{
    opacity: 0.9;
    transform: scale(0.98)
}

`