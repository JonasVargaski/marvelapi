import types from "./types";

const INITIAL_STATE = {
  itens: [],
  total: 0,
  offset: 0,
  fetching: false,
};

export function characters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_CHARACTERS: {
      const { characters, offset, total } = action.payload;
      return {
        ...state,
        itens: [...state.itens, ...characters],
        offset,
        total,
        fetching: false,
      };
    }
    case types.SET_CHARACTERS: {
      const { characters, offset, total } = action.payload;
      return {
        ...state,
        itens: [...characters],
        offset,
        total,
      };
    }
    case types.SET_FETCHING: {
      const { isFetching } = action.payload;
      return {
        ...state,
        fetching: isFetching,
      };
    }
    default:
      return state;
  }
}
