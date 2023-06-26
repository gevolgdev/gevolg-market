import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 3rem 1.5rem;
  background: #9B7BFF;
  z-index: 99;

  img {
    width: 200px;
    margin: 0 auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto 0;

    h1 {
      font-size: 2rem;
      color: white;
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
  font-weight: bold;
  font-size: 1rem;
  margin: auto 0 0;
  padding: 0.9rem;
  border-radius: 100px;
  background: #51FFB0;
  border: none;
  cursor: pointer;
  }
`;