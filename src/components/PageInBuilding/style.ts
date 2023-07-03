import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2rem;

  span {
    display: flex;
    font-size: 3rem;
    color: #9B7BFF;
    animation: rotating 3s ease infinite;
  }
  h1 {
    text-align: center;
    font-weight: 500;
    color: rgb(14, 20, 51, 0.8);
    margin: 1rem 0 3rem;
  }
  a {
    background:  #9B7BFF;
    padding: 1rem 2rem;
    border-radius: 100px;
    color: white;
    text-decoration: none;
  }

  @keyframes rotating {
    to {
      transform: rotate(-360deg);
    }
  }
`; 