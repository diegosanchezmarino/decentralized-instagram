import styled from 'styled-components'

export const StyledPost = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1px;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    margin-top: 15px;
    margin-bottom: 15px;
`

export const Header = styled.div`

    padding: 15px;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    background-color: white;
    img {
        width: 30px;
        height: 30px;
    }

    p {
        margin-left: 10px;
        margin-right: 0;
        margin-bottom: 0;
        font-size: 13px;
        margin-top: 0;
    }

`
export const MainImage = styled.div`

    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);

    img{
        display: block;
        max-width: 600px;
        max-height: 750px;
        width: auto;
        height: auto;
    }
`

export const Footer = styled.div`

    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: white;
`

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
`

export const TipButton = styled.img`

    border-radius: 100%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    border: none;
    &:hover{
        transform: scale(0.98);
        opacity: 0.9;
    }

`

export const Description = styled.p`
    padding: 10px;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    font-weight: 300;
    color: #262626;
    font-size: 16px;
`

export const TipsInformation = styled.div`

    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-top: 1px solid rgba(var(--b6a,219,219,219),1);
    p { 
        font-weight: 150;
        font-size: 12px;
        margin-top: 0;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0;
    }

`
