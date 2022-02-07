import styled from 'styled-components'

export const StyledConnectView = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding: 250px;
    margin-top: 80px;

`
export const MainImage = styled.img`

    width: 200px;
    height: 200px;
    margin: 50px;
`
export const Connect = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h6 {
        margin: 0 0 0 0;
        color: black;
        margin-bottom: 15px;
    }
    button {
        
        color: white;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0,0,0,0.15);
        cursor: pointer;
        font-size: 25px;
        background-color: #0095f6;
        border: none;
        &:hover{
            opacity: 0.9;
            transform: scale(0.98)
        }
    }
`
