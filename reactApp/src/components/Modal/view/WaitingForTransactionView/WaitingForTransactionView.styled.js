

import styled from 'styled-components'

export const StyledWaitingForTransactionView = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;

    h4 {
        align-self: center;
        margin-top: 140px;
    }
`

export const Title = styled.p`
    
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    font-weight: 500;
    font-size: 14px;
`

export const Button = styled.button`
    align-self: center;
    color: white;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    cursor: pointer;
    font-size: 14px;
    background-color: #0095f6;
    border: none;
    margin-top: 30px;
    &:hover{
        opacity: 0.9;
        transform: scale(0.98)
    }

`
