"use client";

import React, { createContext, useReducer } from "react";

export type EditCredit = {
  description: string;
  stake: string;
  pitch: string;
  mint: string;
};

export type Credit = {
  credit: EditCredit;
  dispatch?: React.Dispatch<Action>;
};

export enum ActionType {
  description = "DESCRIPTION",
  stake = "STAKE",
  pitch = "PITCH",
  mint = "MINT",
}

export type Action = {
  type: ActionType;
  value: string;
};

const PartnersContext = createContext<Credit>({
  credit: {
    description: "",
    stake: "",
    pitch: "",
    mint: "",
  },
});

export const reducer = (state: EditCredit, action: Action) => {
  const { type, value } = action;
  switch (type) {
    case ActionType.description:
      return { ...state, description: value };
    case ActionType.stake:
      return { ...state, stake: value };
    case ActionType.pitch:
      return { ...state, pitch: value };
    case ActionType.mint:
      return { ...state, mint: value };
    default:
      return state;
  }
};

export const PartnersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, {
    description: "",
    stake: "",
    pitch: "",
    mint: "",
  });
  return (
    <PartnersContext.Provider value={{ credit: state, dispatch }}>
      {children}
    </PartnersContext.Provider>
  );
};

export default PartnersContext;
