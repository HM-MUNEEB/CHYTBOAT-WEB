import "../styles/Global.css";
import { AuthContextProvider } from "../context/authContext/authContext";
import ProtectedRoute from "../components/protectedRoute/protectedRoute";
import { ErrorContextProvider } from "../context/errorHandlingContext/errorContext";
import { AuthRouteContextProvider } from "../context/ProtectedRoutesContext/authRoutesContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <AuthContextProvider>
        <ErrorContextProvider>
          <Component {...pageProps} />
        </ErrorContextProvider>
      </AuthContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
