import { useState, createContext, useContext, useEffect } from "react";

export const SnipcartContext = createContext();

export const ScipcartProvider = ({ children }) => {
  const snipcartState = useSnipcartState();

  return (
    <SnipcartContext.Provider value={{ snipcartState }}>
      {children}
    </SnipcartContext.Provider>
  );
};

export function useSnipcartState() {
  const [state, setState] = useState({});

  useEffect(() => {
    let unsubscribe;
    (function pollToSubscribe() {
      if (!window.Snipcart) {
        setTimeout(() => {
          pollToSubscribe();
        }, 100);
        return;
      }
      unsubscribe = window.Snipcart.store.subscribe(() => {
        const snipcartState = window.Snipcart.store.getState();
        setState(snipcartState);
      });
    })();
    return () => {
        if (unsubscribe) unsubscribe();
    }
  }, []);
  return {
    ...state,
  };
}

export function useSnipcart() {
  const snipcart = useContext(SnipcartContext);
  return {
    name: "Amazon Store",
    ...snipcart,
  };
}
