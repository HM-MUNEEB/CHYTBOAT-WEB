import MainApp from "../components/MainApp.js";
import { LoadingContextProvider } from "../context/loadingContext/loadingContext.js";
import { useAuthRoute } from "../context/ProtectedRoutesContext/authRoutesContext.js";
import { useEffect } from "react";

export default function AppConsole() {
  const { routeCheck, protectedRoute } = useAuthRoute();
  useEffect(() => {
    protectedRoute();
  }, []);

  return (
    <div>
      {routeCheck === "app-console" ? (
        <LoadingContextProvider>
          <MainApp />
        </LoadingContextProvider>
      ) : (
        ""
      )}
    </div>
  );
}
