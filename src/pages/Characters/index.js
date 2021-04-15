import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { loadCharacters, clearCharacters } from "../../services/marvel";
import { useIntersect } from "../../hooks/useIntersect";

import loadingSVG from "../../assets/svg/loading.svg";
import { Header } from "../../Components/Header";
import { Search } from "./Search";
import { Content, List, ListItem } from "./styles";

export function Characters() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState("");

  const [ref, entry] = useIntersect({ threshold: [0.1] });

  const { itens: characters, fetching } = useSelector(
    (state) => state.characters
  );

  useEffect(() => {
    if (entry.isIntersecting) {
      loadCharacters(search);
    }
  }, [dispatch, entry, search]);

  const handleSearch = useCallback((searchTerm) => {
    clearCharacters();
    setSearch(searchTerm);
  }, []);

  const handleView = useCallback((id) => history.push(`/character/${id}`), [
    history,
  ]);

  return (
    <>
      <Header>
        <Search value={search} onChange={handleSearch} debounceTime={600} />
      </Header>

      <Content fetching={fetching}>
        <List>
          {characters.map((character) => (
            <ListItem
              key={character.id}
              onClick={() => handleView(character.id)}
            >
              <img src={character.thumbnail} alt={character.name} />
              <p>{character.name}</p>
            </ListItem>
          ))}
        </List>

        <img src={loadingSVG} alt="loader" ref={ref} />
      </Content>
    </>
  );
}
