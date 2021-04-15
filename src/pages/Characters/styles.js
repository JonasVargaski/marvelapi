import styled from "styled-components";
import { Card } from "../../Components/Card";

export const Content = styled.main`
  grid-area: content;
  overflow: auto;
  background: ${({ theme }) => theme.colors.Gray50};
  height: 100%;
  padding: 30px;

  > img {
    display: block;
    margin: 15px auto;
    width: 90px;
    height: 70px;
    visibility: ${({ fetching }) => (fetching ? "visible" : "hidden")};
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 35px;
`;

export const ListItem = styled(Card)`
  cursor: pointer;
  height: 350px;
  max-width: 260px;

  &:hover {
    > p {
      color: ${({ theme }) => theme.colors.Pink800};
    }
  }

  > img {
    height: calc(100% - 45px);
    width: 100%;
  }

  > p {
    font-size: 1rem;
    font-weight: bold;
    margin: 15px 0 10px;
    color: ${({ theme }) => theme.colors.Gray900};
  }
`;
