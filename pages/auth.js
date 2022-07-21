import Auth from "../components/auth/authentication.js";
import { useEffect } from "react";
import { useAuthRoute } from "../context/ProtectedRoutesContext/authRoutesContext.js";

export default function AuthConsole() {
  const { routeCheck, protectedRoute } = useAuthRoute();
  useEffect(() => {
    protectedRoute();
  }, []);
  return <div>{routeCheck === "auth" ? <Auth /> : ""}</div>;
}
