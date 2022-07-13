import MainApp from "../components/MainApp.js";
import { LoadingContextProvider } from "../context/loadingContext/loadingContext.js";
import { useAuthRoute } from "../context/ProtectedRoutesContext/authRoutesContext.js";

export default function AppConsole() {
  const { routeCheck } = useAuthRoute();
  console.log("app-console: " + routeCheck);

  return (
    <div>
      {routeCheck == "app-console" ? (
        <LoadingContextProvider>
          <MainApp />
        </LoadingContextProvider>
      ) : (
        ""
      )}
    </div>
  );
}
