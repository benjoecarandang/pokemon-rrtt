import { FilterProvider } from "../FilterProvider";
import { AppProvider } from "./Provider";
import { AppRouter } from "./Router";

export const App = () => {
  return (
    <AppProvider>
      <FilterProvider>
        <AppRouter />
      </FilterProvider>
    </AppProvider>
  );
};
