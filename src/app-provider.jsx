import React, { useContext, useReducer } from 'react';

export const AppContext = React.createContext();

const AppProvider = ({ children, initState, reducer }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
export default AppProvider;

export const useAppState = () => {
  return useContext(AppContext);
};
