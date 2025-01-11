import React from 'react';
import type { FlowNode } from '../types/flow';

interface FlowDiagramProps {
  nodes: FlowNode[];
  maxHeight?: number;
}

const renderNode = (node: FlowNode, level: number = 0) => {
  const paddingLeft = level * 24;
  
  return (
    <div key={node.id} style={{ paddingLeft }} className="relative">
      <div className="flex items-center gap-3 py-2">
        <div className="w-3 h-3 rounded-full bg-primary" />
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
          {node.label}
        </div>
      </div>
      {node.children && (
        <div className="border-l-2 border-primary-200 ml-1.5 pl-6 mt-2">
          {node.children.map(child => renderNode(child, level + 1))}
        </div>
      )}
    </div>
  );
};

export default function FlowDiagram({ nodes, maxHeight = 600 }: FlowDiagramProps) {
  return (
    <div 
      className="bg-gray-50 p-6 rounded-lg overflow-auto"
      style={{ maxHeight }}
    >
      {nodes.map(node => renderNode(node))}
    </div>
  );
}