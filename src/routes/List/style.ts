import styled from "styled-components";

interface ColorProps {
  color: string;
};

interface ProductProps {
  collected: boolean;
};

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 1.5rem;
`;

export const Header = styled.div<ColorProps>`
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({color}) => color ? color : '#9B7BFF'};
  img {
    width: 140px;
    height: 17px;
  }
  .delete {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .4rem;
    border-radius: 7px;
    margin-top: 3px;
    color: #dc2626;
    font-size: 1rem;
    background: white;
    border: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    flex-direction: column;
    gap: .6rem;
    h1 {
      font-size: 2rem;
      font-weight: 500;
      color: #0E1433;
      span {
        font-weight: bold;
        color: #0E1433;
      }
    }
    p {
      color: #0E1433;
      opacity: 80%;
    }
  }
`;

export const ProductsItens = styled.section`
  display: flex;
  height: 60vh;
  padding-bottom: 3rem;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;

  .unchecks {
    display: flex;
    justify-content: center;
    border: none;
    background: transparent;
    text-decoration: underline;
    opacity: 80%;

    margin-top: 1rem;
  }
`;

export const Product = styled.div<ProductProps>`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 7px;
  background: ${({collected}) => collected ? '#DCFFEF' : '#EDEDED'};

  .checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: 1rem;
    border: ${({collected}) => collected ? 'solid 2px #51FFB0' : 'solid 2px #19191F'};
    border-radius: 3px;
    background: ${({collected}) => collected ? '#51FFB0' : '#EDEDED'};
    font-size: 1rem;
  };

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

export const Buttons = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  background: white;

  button {
    display: block;
    width: 200px;
    padding: 1rem;
    border: 0;
    border-radius: 100px;
    cursor: pointer;
    font-size: 1rem;
  }
  .manager {background: transparent; color: #737373; border: solid 1px #737373}
  .add {background: #9B7BFF ; color: white;}
`;