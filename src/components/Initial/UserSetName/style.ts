import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 3rem 1.5rem 5rem;
  background: white;
  z-index: 99;
  gap: 5rem;

  img {
    display: block;
    margin: 0 auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 100%;

    h1 {
      font-size: 2rem;
      color: #0E1433;
    }

    p {
      width: 90%;
      color: white;
      opacity: 90%;
      font-weight: 400;
      margin-top: .5rem;
    }
  
    input {
      font-size: 1rem;
      font-family: 'Inter Tight', sans-serif;
      background: #F1F1F1;
      border-radius: 5px;
      border: none;
      outline: none;
      padding: 15px;
      margin-top: 2rem;
    }
  }

  button {
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    padding: 0.9rem;
    margin-top: auto;
    border-radius: 100px;
    color: white;
    background: #9B7BFF;
    border: none;
    cursor: pointer;
  }
`;