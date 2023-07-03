import styled from 'styled-components';

export const Container = styled.div`
  animation: backgroundAnime 0.1s ease  forwards;
  position: fixed;
  width: 100%;
  height: 100%;

  z-index: 98;

  @keyframes backgroundAnime {
    to {
      background: rgb(84,84,84, 0.7);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  animation: animeSide 0.1s ease 0.2s forwards;
  transform: translateX(-100%);
  max-width: 270px;
  height: 100%;
  background: white;
  padding: 1.5rem 1rem;

  
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;

    img {
      width: auto;
    }
    button {
      font-size: 1.3rem;
      color: #0E1433;
      background: transparent;
      border: none;
    }
  }

  h3 {
    color: #0E1433;
    font-size: 2rem;
    font-weight: 600;
  }

  @keyframes animeSide {
    to {
      transform: translateX(0);
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  width: 80%;

  button {
    display: flex;
    border: none;
    padding-bottom: 1rem;
    border-bottom: solid 0.5px rgba(96,95,99, 0.3);
    background: transparent;
    font-size: 1rem;
    color: #605F63;
  }

  button:last-child {
    border-bottom: none;
  }
`;

export const MyLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
  margin-top: auto;

  a {
    font-size: 1.2rem;
    display: flex;
    background: transparent;
    border: none;
    color: #9B7BFF;
  }
`;