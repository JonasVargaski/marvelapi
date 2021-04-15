import styled from "styled-components";

export const LayoutBase = styled.section`
  display: grid;
  grid-template-areas: "header" "content";
  grid-template-columns: 1fr;
  grid-template-rows: 175px 1fr;
  height: 100%;
  max-height: 100%;
  background: ${({ theme }) => theme.colors.Gray50};
`;
