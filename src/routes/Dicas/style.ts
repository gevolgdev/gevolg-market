import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  header {
    display: flex;
    flex-direction: row;
    gap: 4rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  
  .texts {
    h1, p {
      font-size: 2rem;
      color: #0E1433;
    }
    p {opacity: 80%;}
  }
  
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
  }
`;