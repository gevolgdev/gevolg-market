import styled from "styled-components";

interface ProductProps {
  collected: boolean;
};

export const Container = styled.div<ProductProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 1rem;
  background: transparent;
  
  .option-button {
    display: flex;
    justify-content: center;
    width: 1rem;
    background: transparent;
    border: none;
    font-size: 1.3rem;
  }
  
  .options {
    padding: 0 0.5rem 0 2rem;
    position: absolute;
    right: 3rem;
    height: 100%;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    background: ${({collected}) => collected ? '#DCFFEF' : '#EDEDED'};
    gap: 1.3rem;

    button {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.3rem;
      background: transparent;
      border: none;
    }

    .delete { color: #dc2626 }
    .edit { color: #262626 }
  }
`;