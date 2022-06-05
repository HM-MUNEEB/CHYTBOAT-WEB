import MainApp from "../components/MainApp.js";
import { LoadingContextProvider } from "../context/loadingContext/loadingContext.js";

export default function AppConsole() {
  return (
    <LoadingContextProvider>
      <MainApp />
    </LoadingContextProvider>
  );
}
