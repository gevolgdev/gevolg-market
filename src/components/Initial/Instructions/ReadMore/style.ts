import styled from "styled-components";

interface ContainerProps {
  currentPageCircle: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2rem;

  h1 {
    color: #0E1433;
    text-align: center;
  }
  .image-product {
  }

  .current-page {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-top: 1rem;

    .circle {
      width: 7px;
      height: 7px;
      background: #D9D9D9;
      border-radius: 100px;
    }
    .circle:nth-child(${({ currentPageCircle }) => currentPageCircle}) {
      background: #9B7BFF;
    }
  }
`;