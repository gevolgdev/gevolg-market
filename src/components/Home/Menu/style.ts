import styled from 'styled-components';

export const Container = styled.div`
  animation: backgroundAnime 0.1s ease  forwards;
  position: fixed;
  left: 0;
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
  max-width: 80%;
  height: 100%;
  background: #0E1433;
  padding: 2rem 1.5rem;

  
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
      color: white;
      background: transparent;
      border: none;
    }
  }

  h3 {
    color: white;
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

  button, a {
    display: flex;
    border: none;
    padding-bottom: 1rem;
    border-bottom: solid 0.5px rgba(96,95,99);
    background: transparent;
    font-size: 1rem;
    color: #D9D9D9;
    text-decoration: none;
  }

  button:last-child {
    border-bottom: none;
  }
  a:last-child {
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