import MainApp from "../components/MainApp.js";
import { LoadingContextProvider } from "../context/loadingContext/loadingContext.js";
import { useAuth } from "../context/authContext/authContext.js";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthRoute } from "../context/ProtectedRoutesContext/authRoutesContext.js";

export default function AppConsole() {
  return (
    <LoadingContextProvider>
      <MainApp />
    </LoadingContextProvider>
  );
}
