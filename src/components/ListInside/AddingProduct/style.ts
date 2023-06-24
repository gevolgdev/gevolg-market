import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 3rem 1.5rem 0;
  background: #9B7BFF;
  z-index: 99;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  margin-top: 3rem;
  gap: 1rem;

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
  align-items: center;
  justify-content: end;

  h1 {
    font-size: 2rem;
    color: #FAF8F0;
  }

  button {
    display: flex;
    align-items: start;
    font-size: 1.3rem;
    background: white;
    padding: 0.3rem;
    border: none;
    border-radius: 7px;
    color: #dc2626;
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