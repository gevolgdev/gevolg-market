import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 2rem 1.5rem;
  display: flex;
  justify-content: space-between;
`;

export const BoxName = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #51FFB0;
  border-radius: 5px;
  font-weight: bold;
`;

export const Cart = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .haveItems {
    position: absolute;
    right: -5px;
    top: 1px;
    width: 10px;
    height: 10px;
    background: #9B7BFF;
    border-radius: 100px;
  }
  svg {
    font-size: 25px;
  }
`;