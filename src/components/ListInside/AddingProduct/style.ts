import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 1.5rem;
  background: #9B7BFF;
  z-index: 99;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  gap: 1rem;

  h1 {
    font-size: 2rem;
    margin: 2rem 0 1rem;
    color: #FAF8F0;
  }

  div {
    display: flex;
    flex-direction: column;

    label {
      color: #D9D9D9;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }
    input, select {
      font-size: 1rem;
      font-family: 'Inter Tight', sans-serif;
      background: #F1F1F1;
      border-radius: 5px;
      border: none;
      outline: none;
      padding: 15px;
    }
  }         
`;

export const Header = styled.header`
  width: 100%;
  margin-left: auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    align-items: start;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: #FAF8F0;
    cursor: pointer;
  }                                             
`;

export const Button = styled.button`
  width: 90%;
  display: flex;
  justify-content: center;
  font-family: 'Inter Tight', sans-serif;
  font-weight: bold;
  font-size: 1rem;
  margin: 50px auto 0;
  padding: 0.9rem;
  border-radius: 100px;
  background: #51FFB0;
  border: none;
  cursor: pointer;
`;