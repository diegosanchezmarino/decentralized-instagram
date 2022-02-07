import styled from 'styled-components'

export const StyledNavBar = styled.div`
  background-color: #fff;
  padding: 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width:100%;
  z-index:100;
  flex-direction: row;
  border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
  img {
    width: 80px;
    height: 80px;
  }

`

export const RightStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
`
