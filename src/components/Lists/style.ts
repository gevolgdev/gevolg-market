import styled from 'styled-components';

interface ColorProps {
  color: string;
};

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
`;

export const ListCard = styled.div<ColorProps>`
  width: 220px;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  flex-shrink: 0;
  border-radius: 25px;
  background: ${props => props.color ? `${props.color}` : '#9B7BFF'};
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  
  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    span {
      color: ${props => props.color ? `${props.color}` : '#9B7BFF'};
      font-size: 0.9rem;
      padding: 5px 10px;
      border-radius: 100px;
      background: #51FFB0;
    }
    svg {
      color: white;
      font-size: 1.5rem;
    }
  }
  h2 {
    font-size: 2rem;
    color: white;
    margin-top: auto;
  }
  p {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #E9E9E9;
    margin-top: 20px;
  }
`;