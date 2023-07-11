import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  padding-top: 2rem;

  .list-empty {
    display: flex;
    color: #bebebe;
    font-weight: 300;
    margin: 6rem auto 0;
  }
  .list-full {
    display: flex;
    align-items: center;
    color: #7e7e7e;
    padding-left: 1.5rem;
    
    .lists-amount {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: .5rem;
      padding: 5px;
      color: white;
      border-radius: 100px;
      font-size: .7rem;
      background: #9B7BFF;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 1.5rem;
  gap: 20px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;