import styled from 'styled-components';

interface ColorProps {
  color?: string;
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Detail = styled.div<ColorProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #605F63;

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    font-size: 1rem;
    font-weight: 600;
    /* border: solid 2px #19191F; */
    border-radius: 100px;
    margin-bottom: 5px;
  }
  p {
    font-size: .8rem;
    span {
      font-size: 1rem;
    }
  }

  .dot-products{ color: ${({ color }) => color} }
  .dot-pend{ color: #ca8a04 }
  .dot-collect{ color: #22c55e }
  .dot-archive{ color: #64748b }
`;