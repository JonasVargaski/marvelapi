import styled, { css } from "styled-components";
import { Button } from "../../Components/Button";
import { Card } from "../../Components/Card";

export const Content = styled.main`
  grid-area: content;
  overflow: auto;
  background: ${({ theme }) => theme.colors.Gray50};
  transition: all 0.5s ease;
  padding: 24px;

  > h2 {
    font-size: 1.6rem;
    padding: 25px;
    color: ${({ theme }) => theme.colors.Gray800};
  }

  > img {
    margin: 15px auto;
    width: 90px;
    height: 70px;
    display: none;
  }

  ${({ fetching }) =>
    fetching &&
    css`
      > img {
        display: block;
      }
    `}
`;

export const CharacterInfo = styled.section`
  display: flex;
  margin-bottom: 18px;
  > img {
    max-width: 300px;
    border: 1px solid ${({ theme }) => theme.colors.Gray800};
    border-radius: 3px;
  }
  div {
    margin: 10px 0 0 16px;
    display: flex;
    flex-direction: column;
    > p {
      margin-bottom: 10px;
      font-size: 1.05rem;
      > b {
        padding-right: 6px;
      }
      span {
        color: ${({ theme }) => theme.colors.Gray600};
      }
    }
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px 6px;
`;

export const ListItem = styled(Card)`
  height: 400px;
  max-width: 250px;

  > img {
    height: calc(100% - 45px);
    width: 100%;
  }
`;

export const BackButton = styled(Button)`
  margin-right: auto;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.Red600};
  color: #fff;
`;

export const ActionButton = styled(Button)`
  max-width: fit-content;
  margin-top: auto;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.Gray500};
  color: ${({ theme }) => theme.colors.White};
`;
