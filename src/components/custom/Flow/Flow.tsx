import { useContext, useMemo } from "react";
import { getLayoutedElements } from "./utils";
import { TeamContext } from "@/lib/contexts/TeamContext";
import {
  Background,
  Controls,
  ReactFlow,
  type Edge,
  type Node,
} from "@xyflow/react";

export const Flow = () => {
  const { teams } = useContext(TeamContext);

  const { nodes, edges } = useMemo(() => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    teams.forEach((team) => {
      nodes.push({
        id: team.id,
        data: {
          label: team.name,
          type: "team",
        },
        position: { x: 0, y: 0 },
        className: "bg-primary text-primary-foreground rounded-md px-4 py-2",
      });

      team.members.forEach((member) => {
        if (member.hidden) return;

        const memberId = `${team.id}-${member.id}`;
        nodes.push({
          id: memberId,
          data: {
            label: member.name,
            type: "member",
          },
          position: { x: 0, y: 0 },
          className:
            "bg-secondary text-secondary-foreground rounded-md px-4 py-2",
        });

        edges.push({
          id: `${team.id}-${memberId}`,
          source: team.id,
          target: memberId,
          className: "text-red-500",
        });
      });
    });

    return getLayoutedElements(nodes, edges);
  }, [teams]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      fitView
      className="border rounded-md"
      panOnDrag
      defaultEdgeOptions={{
        type: "smoothstep",
      }}
    >
      <Controls position="bottom-left" />
      <Background />
    </ReactFlow>
  );
};
