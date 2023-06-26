import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  padding: 6rem 2.5rem;
  background: rgb(84,84,84, 0.7);

  .content{
    display: flex;
    flex-direction: column;
    background: white;
    width: 100%;
    padding: 3rem 2rem 2rem;
    border-radius: 25px;
    background: white;
    @media (min-width: 800px){
      width: 500px;
      margin: 0 auto;
    }

    h1 {
      font-size: 1.5rem;
      font-weight: 500;
      color: #0E1433;
    }

    .buttons {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 2rem;

      button {
        width: 100px;
        padding: .6rem;
        border: 0;
        border-radius: 7px;
        cursor: pointer;
      }
      .del {background: #dc2626; color: white;}
      .cancel {color: #0E1433;}
    }
  }
`;