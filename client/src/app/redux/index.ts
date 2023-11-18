import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ConnectorState {
  connectors: string[];
}
const initialState: ConnectorState = {
  connectors: [],
};

const connectorSlice = createSlice({
  name: "connector",
  initialState,
  reducers: {
    setConnectors: (state, action: PayloadAction<string[]>) => {
      return { ...state, connectors: action.payload };
    },
  },
});

export const { setConnectors } = connectorSlice.actions;

const connectorReducer = connectorSlice.reducer;

export const store = configureStore({
  reducer: {
    connectors: connectorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
