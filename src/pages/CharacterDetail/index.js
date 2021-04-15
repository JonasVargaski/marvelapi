import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";

import loadingSVG from "../../assets/svg/loading.svg";
import { Header } from "../../Components/Header";
import { getCharacter } from "../../services/marvel";
import {
  Content,
  BackButton,
  CharacterInfo,
  List,
  ListItem,
  ActionButton,
} from "./styles";

export function CharacterDetail() {
  const history = useHistory();
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  const fetching = useSelector((state) => state.characters.fetching);

  useEffect(() => {
    if (!id) return history.push("/");

    getCharacter(id, "series").then(setCharacter);
    return () => setCharacter(null);
  }, [id, history]);

  return (
    <>
      <Header>
        <BackButton onClick={() => history.push("/")}>
          Back to Characters
        </BackButton>
      </Header>
      <Content fetching={fetching}>
        {!!character && (
          <>
            <CharacterInfo>
              <img src={character.thumbnail} alt={character.name} />
              <div>
                <p>
                  <b>Name:</b>
                  <span>{character.name}</span>
                </p>
                <p>
                  <b>Description:</b>
                  <span>{character.description}</span>
                </p>
                <ActionButton>Edit Character</ActionButton>
              </div>
            </CharacterInfo>

            <h2>Series</h2>

            <List>
              {character.series?.map((serie) => (
                <ListItem key={serie.id}>
                  <img src={serie.thumbnail} alt={serie.name} />
                  <p>{serie.name}</p>
                </ListItem>
              ))}
            </List>
          </>
        )}
        <img src={loadingSVG} alt="loader" />
      </Content>
    </>
  );
}
