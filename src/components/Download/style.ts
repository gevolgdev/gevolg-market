import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;

  img {
    width: 150px;
    margin: 0 auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    gap: 3rem;

    h1 {
      font-size: 2.5rem;
      text-align: center;
      color: #0E1433;
    }
    .buttons {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      button {
        width: 200px;
        padding: 1rem 0;
        font-size: 1rem;
      }
      .download {
        background: #9B7BFF;
        border: none;
        color: white;
      }
      .navigator {
        background: transparent;
        border: solid 1px #737373;
        color: #737373;
      }
    }
  }
`;