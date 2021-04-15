import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  padding: 5px;
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.25);
  }
`;
