import { useContext, useMemo } from "react";
import { getLayoutedElements } from "./utils";
import { TeamContext } from "@/lib/contexts/TeamContext";
import {
  Background,
  Controls,
  ReactFlow,
  useReactFlow,
  type Edge,
  type Node,
} from "@xyflow/react";
import { CustomNode } from "./CustomNode";
import { NodeData, NodeType } from "@/lib/models/flow";

const nodeTypes = {
  [NodeType.TEAM]: CustomNode,
  [NodeType.MEMBER]: CustomNode,
};

export const Flow = () => {
  const { teams } = useContext(TeamContext);

  const { nodes, edges } = useMemo(() => {
    const nodes: Node<NodeData>[] = [];
    const edges: Edge[] = [];

    teams.forEach((team) => {
      nodes.push({
        id: team.id,
        data: {
          label: team.name,
          description: team.description,
        },
        type: NodeType.TEAM,
        position: { x: 0, y: 0 },
        className: "bg-primary text-primary-foreground rounded-md",
      });

      if (!team.membersHidden) {
        team.members.forEach((member) => {
          const memberId = `${team.id}:${member.id}`;
          nodes.push({
            id: memberId,
            data: {
              label: member.name,
              description: member.description,
            },
            type: NodeType.MEMBER,
            position: { x: 0, y: 0 },
            className: "bg-secondary text-secondary-foreground rounded-md",
          });

          edges.push({
            id: `${team.id}-${memberId}`,
            source: team.id,
            target: memberId,
            className: "text-red-500",
          });
        });
      }
    });

    return getLayoutedElements(nodes, edges);
  }, [teams]);

  const instance = useReactFlow();

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={() => instance.fitView()}
      panOnDrag
      fitView
      className="border rounded-md"
    >
      <Controls position="bottom-left" />
      <Background />
    </ReactFlow>
  );
};
