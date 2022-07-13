import "../styles/Global.css";
import { AuthContextProvider } from "../context/authContext/authContext";
import ProtectedRoute from "../components/protectedRoute/protectedRoute";
import { ErrorContextProvider } from "../context/errorHandlingContext/errorContext";
import { AuthRouteContextProvider } from "../context/ProtectedRoutesContext/authRoutesContext";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <AuthRouteContextProvider>
          <ErrorContextProvider>
            <Component {...pageProps} />
          </ErrorContextProvider>
        </AuthRouteContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
