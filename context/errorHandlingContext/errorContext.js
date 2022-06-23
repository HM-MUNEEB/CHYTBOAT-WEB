import { createContext, useContext, useState } from "react";

const ErrorContext = createContext({
  error: "",
  handleError: () => {},
});
export const useError = () => useContext(ErrorContext);
export const ErrorContextProvider = ({ children }) => {
  const [error, setError] = useState("");

  function handleError(data) {
    setError(data);
  }

  return (
    <ErrorContext.Provider value={{ error, handleError }}>
      {children}
    </ErrorContext.Provider>
  );
};
