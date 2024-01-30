import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getValidPath } from "../utils";
import { ConnectorState, ChangePositionPayload } from "./types";

const initialState: ConnectorState = {
  connectorsList: [
    { name: "CCS", image: "ccs", selected: false },
    { name: "CHAdeMO", image: "chademo", selected: false },
    { name: "AC", image: "ac", selected: false },
  ],
  validPath: getValidPath(),
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
    setSelectedConnector: (state, action) => {
      state.selectedConnector = action.payload;
    },
    changePosition: (
      state: ConnectorState,
      action: PayloadAction<ChangePositionPayload>
    ) => {
      const rowToUpdate = state.validPath[action.payload.row];

      const indexToModify = rowToUpdate.findIndex(
        (elem) => elem.key == action.payload.key
      );
      state.validPath[action.payload.row][indexToModify].position =
        action.payload.newPosition;
    },
    validFlow: (state, action) => {
      state.validFlow = action.payload;
    },
    registerTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setNameAndTime: (state, action) => {
      state.currentUser = action.payload;
    },
    cleanUp: (state) => {
      state.currentUser = undefined;
      state.currentTime = undefined;
      state.validFlow = undefined;
      state.connectorsList = [
        { name: "CCS", image: "ccs", selected: false },
        { name: "CHAdeMO", image: "chademo", selected: false },
        { name: "AC", image: "ac", selected: false },
      ];
      state.validPath = getValidPath();
    },
  },
});

export const {
  setConnector,
  setSelectedConnector,
  changePosition,
  validFlow,
  registerTime,
  setNameAndTime,
  cleanUp,
} = connectorSlice.actions;

const connectorReducer = connectorSlice.reducer;

export const store = configureStore({
  reducer: {
    connectors: connectorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
