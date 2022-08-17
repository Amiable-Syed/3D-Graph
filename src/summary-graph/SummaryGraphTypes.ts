export enum SummaryTypes {
  A = "a",
  B = "b",
  C = "c",
  D = "d",
  E = "e",
  F = "f",
  G = "g",
  H = "h",
  I = "i",
  J = "j",
  K = "k",
  L = "l",
  M = "m",
  N = "n",
  O = "o",
  P = "p",
  Q = "q",
}

export declare type StateType={
  [key: string]: boolean;
}

export const initialState = {
  [SummaryTypes.A] : false,
  [SummaryTypes.B] : false,
  [SummaryTypes.C] : false,
  [SummaryTypes.D] : false,
  [SummaryTypes.E] : false,
  [SummaryTypes.F] : false,
  [SummaryTypes.G] : false,
  [SummaryTypes.H] : false,
  [SummaryTypes.I] : false,
  [SummaryTypes.J] : false,
  [SummaryTypes.K] : false,
  [SummaryTypes.L] : false,
  [SummaryTypes.M] : false,
  [SummaryTypes.N] : false,
  [SummaryTypes.O] : false,
  [SummaryTypes.P] : false,
  [SummaryTypes.Q] : false
}