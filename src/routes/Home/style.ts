import styled from 'styled-components';

export const Container = styled.section`
  padding: 1rem 0;
  overflow-y: hidden;
`;

export const WelcomeHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;

  .texts {
    h1, p {
      font-size: 2rem;
      color: #0E1433;
    }
    p {opacity: 80%;}
  }
`;

export const Search = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  background: #D7CAFF;

  svg {
    font-size: 1.5rem;
  }
`;

export const AddButton = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 2rem;
  left: 0;

  div {
    width: 60px;
    height: 60px;
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #9B7BFF;
    border-radius: 100px;
    border: none;
    cursor: pointer;
  
    svg {
      font-size: 1.5rem;
      color: white;
    }
  }
`;