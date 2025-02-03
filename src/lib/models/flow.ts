export enum NodeType {
  TEAM = "TEAM",
  MEMBER = "MEMBER",
}

export interface NodeData {
  label: string;
  description?: string;
  [key: string]: unknown;
}
