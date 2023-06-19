import styled from "styled-components";

interface ContainerProps {
  color: string;
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ color }) => color};
`;