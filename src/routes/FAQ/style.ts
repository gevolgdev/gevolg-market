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

  .texts {
    margin: 3rem 0;

    h1, p {
      font-size: 2rem;
      color: #0E1433;
    }
    p {opacity: 80%;}
  }

  .faq {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;