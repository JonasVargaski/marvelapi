import api from "./api";
import { store } from "../../store";
import { storage } from "../../utils/storage";
import {
  addCharacters,
  setCharacters,
  setFetching,
} from "../../store/modules/characters/actions";

export async function loadCharacters(search) {
  const {
    characters: { offset, total },
  } = store.getState();

  if (offset !== 0 && offset >= total) return;

  let querySearch = "";
  if (search?.length) querySearch = `&nameStartsWith=${search}`;

  try {
    store.dispatch(setFetching(true));
    const {
      data: { results, total, offset: loaded },
    } = await api.get(
      `/v1/public/characters?offset=${offset}${querySearch}&limit=20&orderBy=name`
    );

    const charactersEdited = storage.get("characters", []);

    const characters = results.map((x) => {
      const edited = charactersEdited.find((c) => c.id === x.id);
      if (edited) return edited;

      return {
        id: x.id,
        name: x.name,
        thumbnail: `${x.thumbnail.path}.${x.thumbnail.extension}`,
      };
    });

    const offsetCount = loaded + 20;
    store.dispatch(addCharacters(characters, offsetCount, total));

    return characters;
  } catch (error) {
    throw error;
  } finally {
    store.dispatch(setFetching(false));
    return [];
  }
}

export function clearCharacters() {
  store.dispatch(setCharacters([], 0, 0));
  store.dispatch(setFetching(false));
}

export async function getCharacter(id, resource) {
  try {
    store.dispatch(setFetching(true));

    const [
      {
        data: { results: details },
      },
      {
        data: { results: series },
      },
    ] = await Promise.all([
      api.get(`/v1/public/characters/${id}`),
      api.get(`/v1/public/characters/${id}/${resource}`),
    ]);

    const character = storage.get(`character:${id}`) || details[0] || {};

    const content = {
      id: character.id,
      name: character.name,
      description: character.description,
      thumbnail: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      series: series.map((x) => ({
        id: x.id,
        name: x.title,
        thumbnail: `${x.thumbnail.path}.${x.thumbnail.extension}`,
      })),
    };

    return content;
  } catch (error) {
    throw error;
  } finally {
    store.dispatch(setFetching(false));
  }
}
