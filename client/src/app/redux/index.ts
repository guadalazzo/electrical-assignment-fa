import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRandomInt } from "../utils";
import { ConnectorState, ChangePositionPayload } from "./types";

const initialState: ConnectorState = {
  connectorsList: [
    { name: "CCS", image: "ccs", selected: false },
    { name: "CHAdeMO", image: "chademo", selected: false },
    { name: "AC", image: "ac", selected: false },
  ],
  validPath: {
    row1: [
      {
        key: "(0,0)",
        value: "-",
        position: getRandomInt(4),
        validPositions: [0, 2],
      },
      {
        key: "(0,1)",
        value: "-",
        position: getRandomInt(4),
        validPositions: [0, 2],
      },
      {
        key: "(0,2)",
        value: "┐",
        position: getRandomInt(4),
        validPositions: [0],
      },
    ],
    row2: [
      {
        key: "(1,0)",
        value: "┌",
        position: getRandomInt(4),
        validPositions: [0],
      },
      {
        key: "(1,1)",
        value: "-",
        position: getRandomInt(4),
        validPositions: [0, 2],
      },
      {
        key: "(1,2)",
        value: "┘",
        position: getRandomInt(4),
        validPositions: [0],
      },
    ],
    row3: [
      {
        key: "(2,0)",
        value: "└",
        position: getRandomInt(4),
        validPositions: [0],
      },
      {
        key: "(2,1)",
        value: "-",
        position: getRandomInt(4),
        validPositions: [0, 2],
      },
      {
        key: "(2,2)",
        value: "-",
        position: getRandomInt(4),
        validPositions: [0, 2],
      },
    ],
  },
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
  },
});

export const {
  setConnector,
  setSelectedConnector,
  changePosition,
  validFlow,
  registerTime,
} = connectorSlice.actions;

const connectorReducer = connectorSlice.reducer;

export const store = configureStore({
  reducer: {
    connectors: connectorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
