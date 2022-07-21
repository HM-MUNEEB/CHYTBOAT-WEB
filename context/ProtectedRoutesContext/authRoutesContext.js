import { useAuth } from "../authContext/authContext";
import { useRouter } from "next/router";
import { useState, useContext, createContext, useEffect } from "react";

const AuthRouteContext = createContext({
  protectedRoute: () => {},
  routeCheck: null,
});
export const useAuthRoute = () => useContext(AuthRouteContext);

export function AuthRouteContextProvider({ children }) {
  const { user } = useAuth();
  const router = useRouter();
  const [routeCheck, setRouteCheck] = useState(null);

  useEffect(
    function protectedRoute() {
      if (user) {
        if (user.displayName) {
          setRouteCheck("app-console");
          router.push("/app-console");
          console.log("Redirected to App-console");
        }
      } else if (user === false) {
        setRouteCheck("/");
        router.push("/");
        console.log("Redirected to /");
      }
    },
    [user]
  );

  return (
    <AuthRouteContext.Provider value={{ routeCheck }}>
      {children}
    </AuthRouteContext.Provider>
  );
}
