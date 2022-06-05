import "../styles/Global.css";
import { AuthContextProvider } from "../context/authContext/authContext";
import ProtectedRoute from "../components/protectedRoute/protectedRoute";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
