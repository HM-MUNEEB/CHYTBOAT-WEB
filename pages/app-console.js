import MainApp from "../components/MainApp.js";
import { LoadingContextProvider } from "../context/loadingContext/loadingContext.js";
import { useAuth } from "../context/authContext/authContext.js";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function AppConsole() {
  const router = useRouter();
  const { user } = useAuth();
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);
  return (
    <LoadingContextProvider>
      <MainApp />
    </LoadingContextProvider>
  );
}
