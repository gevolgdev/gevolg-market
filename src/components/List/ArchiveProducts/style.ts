import styled from "styled-components";

// interface ColorProps {
//   color: string;
// };

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  padding-bottom: 5rem;
  z-index: 99;
  
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2rem;
    padding: 1rem 1.5rem;
    background: ${ ({color}) => color ? color : '#9B7BFF'};
    gap: 15px;

    .title {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 2rem;
      font-weight: 500;
      color: white;
    }
    button {
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      color: white;
      font-size: 1rem;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;

    .empty {
      display: flex;
      color: #bebebe;
      font-weight: 300;
      margin: 6rem auto 0;
    }
  };

`;