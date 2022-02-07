import styled from 'styled-components'

export const StyledLoader = styled.div`
      width: 60px;
`


export const Wheel = styled.div`
  animation: spin 1s infinite linear;
  border: 2px solid rgba(30, 30, 30, 0.5);
  border-left: 4px solid #fff;
  border-radius: 50%;
  height: 50px;
  margin-bottom: 10px;
  width: 50px;

  @keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`


export const Text = styled.div`
   color: black;
   font-family: arial, sans-serif;
   ::after{
       animation: load 2s linear infinite;
       content: 'Loading';
  }

  @keyframes load {
      0% {
          content: 'Loading';
        }
        33% {
            content: 'Loading.';
        }
  67% {
    content: 'Loading..';
  }
  100% {
    content: 'Loading...';
  }
}
`
