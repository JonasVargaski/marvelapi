import styled from "styled-components";

export const Container = styled.header`
  grid-area: "header";
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.Gray800};
  border-bottom: 1px solid ${({ theme }) => theme.colors.Gray50};
`;

export const BoxSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 14px;

  > strong {
    color: ${({ theme }) => theme.colors.Gray50};
    margin-top: 7px;
    font-weight: bold;
    font-size: 26px;
  }

  > span {
    color: ${({ theme }) => theme.colors.Gray300};
    font-size: 15px;
  }
`;
