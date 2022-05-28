import React, {createContext} from "react";
import { initialStore } from "./InitialState";
import appReducer from "./Reducers";

const AppContext = createContext(initialStore);

function AppProvder({children}) {
  const [state, dispatch] = React.useReducer(appReducer, initialStore)
  const value = {state, dispatch}
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

function useAppState() {
  const context = React.useContext(AppContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export {AppProvder, useAppState}
