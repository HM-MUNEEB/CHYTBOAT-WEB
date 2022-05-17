import "../styles/Global.css";
import { AuthContextProvider } from "../authContext/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />;
    </AuthContextProvider>
  );
}

export default MyApp;
