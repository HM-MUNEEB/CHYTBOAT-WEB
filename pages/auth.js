import Auth from "../components/auth/authentication.js";
import { useAuthRoute } from "../context/ProtectedRoutesContext/authRoutesContext.js";

export default function AuthConsole() {
  const { routeCheck } = useAuthRoute();
  console.log("Auth: " + routeCheck);

  return <div>{routeCheck == "auth" ? <Auth /> : ""}</div>;
}
