import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 6rem 2.5rem;
  background: rgb(84,84,84, 0.7);
  z-index: 97;

  .content {
    width: 100%;
    padding: 3rem 2rem 2rem;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 25px;
    background: white;
    @media (min-width: 800px){
      width: 500px;
      margin: 0 auto;
    }

    .header {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      span, button { font-size: 1.8rem; }
      button {
        display: flex;
        background: transparent;
        border: none;
        cursor: pointer;
      }
    }

    .inputs {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      div {
        display: flex;
        flex-direction: column;

        label {
          color: #898989;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        input, select {
          color: #19191F;
          font-size: 1rem;
          font-family: 'Inter Tight', sans-serif;
          background: #F1F1F1;
          border-radius: 5px;
          border: none;
          outline: none;
          padding: 15px;
        }
      }
    }  
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  font-family: 'Inter Tight', sans-serif;
  font-weight: bold;
  font-size: 1rem;
  color: #19191F;
  border-radius: 10px;
  background: #51FFB0;
  border: none;
  padding: 0.9rem;
  cursor: pointer;
`;