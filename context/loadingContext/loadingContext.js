import { createContext, useContext, useState } from "react";

const LoadingContext = createContext({
  loading: false,
  setLoading: () => {},
  btnClickProcessing: false,
  setBtnClickProcessing: () => {},
});
export const useLoading = () => useContext(LoadingContext);

export const LoadingContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [btnClickProcessing, setBtnClickProcessing] = useState();

  return (
    <LoadingContext.Provider
      value={{ loading, setLoading, btnClickProcessing, setBtnClickProcessing }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
