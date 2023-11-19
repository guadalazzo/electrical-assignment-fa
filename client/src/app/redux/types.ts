export type connectorType = { name: string; image: string; selected: boolean };

export type pathRow = {
  key: string;
  value: string;
  position: number;
  validPositions: number[];
};

export interface ConnectorState {
  connectorsList: connectorType[];
  selectedConnector?: connectorType;
  validPath: { row1: pathRow[]; row2: pathRow[]; row3: pathRow[] };
  validFlow?: boolean;
  currentTime?: number;
}
export interface ChangePositionPayload {
  row: "row1" | "row2" | "row3";
  key: string;
  newPosition: number;
}
export type timeRecord = {
  name: string;
  seconds?: number;
};
