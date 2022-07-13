import "../styles/Global.css";
import { AuthContextProvider } from "../context/authContext/authContext";
import ProtectedRoute from "../components/protectedRoute/protectedRoute";
import { ErrorContextProvider } from "../context/errorHandlingContext/errorContext";
import { AuthRouteContextProvider } from "../context/ProtectedRoutesContext/authRoutesContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <AuthRouteContextProvider>
        <ErrorContextProvider>
          <Component {...pageProps} />
        </ErrorContextProvider>
      </AuthRouteContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
