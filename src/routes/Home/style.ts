import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;

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