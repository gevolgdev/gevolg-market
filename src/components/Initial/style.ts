import styled from 'styled-components';

interface ImagesProps {
  image: string;
};

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 98;
  background: white;

  @media (min-width: 1128px) {
    padding-top: 5rem;
  }

  .infos {
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    height: 100%;
    
    img {
      display: block;
      margin: 0 auto;
    }
    span {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      h1 {
        text-align: center;
        color: #0E1433; 
      }
      p {
        width: 300px;
        color: #605F63;
        text-align: center;
      }
    }
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;

  button, .skip {
    width: 135px;
    padding: 12px 0;
    border-radius: 15px;
    border: none;
  }
  .skip {
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: #737373;
    font-family: 'Inter Tight', sans-serif;
    background: transparent;
    border: solid 1px #737373;
  }
  .read {
    color: white;
    font-family: 'Inter Tight', sans-serif;
    background: #9B7BFF;
    border: solid 1px #9B7BFF;
  }
`;

export const Background = styled.div<ImagesProps>`
  max-width: 1128px;
  height: 300px;
  background: ${({image}) => `url(${image}) no-repeat`};
  background-size: cover;
  background-position: center;
  margin-bottom: .5rem;

  @media (min-width: 1128px) {
    display: none;
  }
`; 