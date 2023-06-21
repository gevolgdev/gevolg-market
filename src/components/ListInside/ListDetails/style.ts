import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
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
  }
`;