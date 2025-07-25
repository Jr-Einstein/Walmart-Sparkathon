'use client'

import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext<any>(null);

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }: any) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);