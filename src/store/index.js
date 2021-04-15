import thunk from "redux-thunk";

import createStore from "./createStore";
import rootReducer from "./modules/rootReducer";

const middlewares = [thunk];
export const store = createStore(rootReducer, middlewares);
