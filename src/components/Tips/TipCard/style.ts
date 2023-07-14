import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #EDEDED;
  gap: 2rem;
  
  .content {
    display: flex;
    flex-direction: column;
    border-left: solid 8px #0E1433;
    gap: 0.5rem;
    padding: 1.5rem 0.5rem 1.5rem 1.5rem;
    
    h2 {
      font-size: 1.6rem;
      color: #0E1433;
    }
    p {
      color: rgba(14, 20, 51, 0.8);
    }
  }
  
  button {
    display: flex;
    align-items: center;
    padding: 1rem;
    border: none;
    background: #51FFB0;
    font-size: 1.2rem;
    color: #0E1433;
    gap: 1rem;
  }
  
  .text-container {
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background: white;
    z-index: 99;
    
    .text {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 1.5rem 1.5rem 5rem;

      span {
        color: rgba(14, 20, 51, 0.5);
      }
      h2 {
        color: rgba(14, 20, 51);
        font-size: 3rem;
      }
      p {
        color: rgba(14, 20, 51);
      }
    }

    .button-ok {
      display: flex;
      width: 100%;
      background: rgba(14, 20, 51, 0.8);
      color: white;
    }
  }
`;