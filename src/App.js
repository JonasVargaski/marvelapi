import { Provider } from "react-redux";
import { store } from "./store";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./styles/ThemeProvider";

export function App() {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <AppRoutes />
      </AppThemeProvider>
    </Provider>
  );
}
