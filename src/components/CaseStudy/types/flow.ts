export interface FlowNode {
  id: string;
  label: string;
  children?: FlowNode[];
}

export interface FlowDiagram {
  title: string;
  nodes: FlowNode[];
}