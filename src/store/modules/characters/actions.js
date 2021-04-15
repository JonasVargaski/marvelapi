import { ReduxAction } from "../../utils/ReduxAction";
import types from "./types";

export const addCharacters = (characters, offset, total) =>
  new ReduxAction(types.ADD_CHARACTERS, { characters, offset, total });

export const setCharacters = (characters, offset, total) =>
  new ReduxAction(types.SET_CHARACTERS, { characters, offset, total });

export const setFetching = (isFetching) =>
  new ReduxAction(types.SET_FETCHING, { isFetching });
