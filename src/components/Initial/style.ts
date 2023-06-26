import styled from 'styled-components';

interface ImagesProps {
  image: string;
};

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
  z-index: 98;
  background: white;

  .infos {
    display: flex;
    padding: 0 1rem;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    
    img {
      display: block;
      margin: 0 auto;
    }
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
`;

export const Buttons = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;

  button, .skip {
    width: 135px;
    padding: 12px 0;
    border-radius: 100px;
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
  width: 100%;
  height: 300px;
  background: ${({image}) => `url(${image}) no-repeat`};
  background-size: cover;
  background-position: center;
  margin-bottom: .5rem;
`; 