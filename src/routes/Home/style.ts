import styled from 'styled-components';

interface SearchProps {
  toCenterDiv: boolean;
};

export const Container = styled.section`
  padding: 1rem 0;
  overflow-y: hidden;
`;

export const WelcomeHeader = styled.div<SearchProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({toCenterDiv}) => toCenterDiv ? 'center' : 'space-between'};
  padding: 0 1.5rem;

  .texts {
    h1, p {
      font-size: 2rem;
      color: #0E1433;
    }
    p {opacity: 80%;}
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .8rem;
  border-radius: 7px;
  border: none;
  background: #D7CAFF;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
  }
  input {
    font-family: 'Inter Tight';
    font-size: 1rem;
    padding: .5rem;
    background: transparent;
    outline: none;
    border: none;
  }
  button {
    display: flex;
    align-items: center;
    opacity: 70%;
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const AddButton = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 2rem;
  left: 0;

  div {
    width: 60px;
    height: 60px;
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #9B7BFF;
    border-radius: 100px;
    border: none;
    cursor: pointer;
  
    svg {
      font-size: 1.5rem;
      color: white;
    }
  }
`;

export const SearchResults = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3rem 1.5rem 0;
  gap: 20px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;