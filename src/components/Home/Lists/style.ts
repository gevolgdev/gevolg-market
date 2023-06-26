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
  .list-full {color: #7e7e7e; padding-left: 1.5rem}
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