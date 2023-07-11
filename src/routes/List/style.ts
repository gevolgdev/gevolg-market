import styled from "styled-components";

interface ColorProps {
  color: string;
};

export const Container = styled.section`
position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  padding: 1rem 1.5rem 5rem;
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
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      color: #0E1433;
      opacity: 80%;

      .unchecks {
        display: flex;
        align-items: center;
        gap: .5rem;
        border: none;
        background: transparent;
        color: #0E1433;
  }
    }
  }
`;

export const ProductsItens = styled.section`
  display: flex;
  background: transparent;
  padding-bottom: 4rem;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`;

export const Buttons = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 1.5rem 2rem;
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
    border-radius: 15px;
    cursor: pointer;
    font-size: 1rem;
  }
  .archive {background: transparent; color: #737373; border: solid 1px #737373}
  .add {background: #9B7BFF ; color: white;}
`;