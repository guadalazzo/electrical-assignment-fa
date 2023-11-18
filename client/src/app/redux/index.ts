import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ConnectorState {
  connectorsList: { name: string; image: string; selected: boolean }[];
}
const initialState: ConnectorState = {
  connectorsList: [
    { name: "CCS", image: "ccs", selected: false },
    { name: "CHAdeMO", image: "chademo", selected: false },
    { name: "AC", image: "ac", selected: false },
  ],
};

const connectorSlice = createSlice({
  name: "connector",
  initialState,
  reducers: {
    setConnector: (state, action) => {
      const auxConnector = action.payload;
      const connectorIndex = state.connectorsList.findIndex(
        (connector) => connector.name === auxConnector.name
      );
      state.connectorsList.forEach((connector) => (connector.selected = false));
      if (connectorIndex !== -1) {
        state.connectorsList[connectorIndex].selected =
          !state.connectorsList[connectorIndex].selected;
      }
    },
  },
});

export const { setConnector } = connectorSlice.actions;

const connectorReducer = connectorSlice.reducer;

export const store = configureStore({
  reducer: {
    connectors: connectorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
