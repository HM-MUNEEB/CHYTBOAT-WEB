import "../styles/Global.css";
import { AuthContextProvider } from "../context/authContext/authContext";
import ProtectedRoute from "../components/protectedRoute/protectedRoute";
import { ErrorContextProvider } from "../context/errorHandlingContext/errorContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ErrorContextProvider>
        <Component {...pageProps} />
      </ErrorContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
