import styled from "styled-components";

interface ProductProps {
  collected: boolean;
};


export const Product = styled.div<ProductProps>`
  position: relative;
  width: 100%;
  padding: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: .5rem;
  align-items: center;
  border-radius: 7px;
  background: ${({collected}) => collected ? '#DCFFEF' : '#EDEDED'};

  div {
    display: flex;
    flex-direction: row;
  }
  .checkbox {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: 1rem;
    border: ${({collected}) => collected ? 'solid 2px #51FFB0' : 'solid 2px #19191F'};
    border-radius: 3px;
    background: ${({collected}) => collected ? '#51FFB0' : '#EDEDED'};
    font-size: 1rem;
  }

  h1 {
    font-size: 1rem;
    font-weight: 600;
    color: #0E1433;
    text-decoration: ${({collected}) => collected ? 'line-through' : 'none'};
    span {
      opacity: 70%;
    }
  }
`;