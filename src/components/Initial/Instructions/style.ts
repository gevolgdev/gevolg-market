import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1.5rem 1.5rem 4rem;
  color: #1f1f1f;
  background: white;
  z-index: 97;

  .logo {
    width: 140px;
  }

  .buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: auto;
    gap: 1rem;

    button {
      flex: 1;
      padding: 12px 0;
      border-radius: 100px;
      border: none;
    }
    .read {
      justify-content: center;
      text-decoration: none;
      color: #737373;
      background: transparent;
      border: solid 1px #737373;
    }
    .go {
      color: white;
      font-family: 'Inter Tight', sans-serif;
      background: #9B7BFF;
      border: solid 1px #9B7BFF;
    }
  }
`;