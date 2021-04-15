import { createStore, compose, applyMiddleware } from "redux";

function create(reducers, middlewares = []) {
  const enhancer =
    process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
          applyMiddleware(...middlewares),
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : applyMiddleware(...middlewares);

  return createStore(reducers, undefined, enhancer);
}

export default create;
