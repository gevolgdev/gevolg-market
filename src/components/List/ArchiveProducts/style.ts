import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  padding: 1rem 1.5rem 5rem;
  z-index: 99;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2rem;

    .title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 2rem;
      font-weight: 500;
      color: #0E1433;
    }
    button {
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      color: #0E1433;
      font-size: 1rem;
      gap: 0.5rem;
    }
  }

`;