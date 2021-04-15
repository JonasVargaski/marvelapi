export function ReduxAction(typeAction = "", payload = null) {
  return { type: typeAction, payload };
}
