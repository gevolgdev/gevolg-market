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

  .image-product {
    width: 300px;
  }

  h1 {
    color: #0E1433;
    text-align: center;
  }
  .more-infos {
    font-size: 1rem;
    background: transparent;
    border: none;
    color: #737373;
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
  .infos {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgb(84,84,84, 0.7);
    padding: 2rem;

    
    .content {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: fit-content;
      background: white;
      border-radius: 10px;
      padding: 2rem;
      
      @media(min-width: 800px) {
        width: 600px;
      }

      p {
        color: #0E1433;
        line-height: 1.5rem;
      }
      button {
        background: transparent;
        border: none;
        color: #737373;
        margin-top: 2rem;
      }
    }
  }
`;