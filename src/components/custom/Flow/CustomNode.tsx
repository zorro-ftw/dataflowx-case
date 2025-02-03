import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { NodeData } from "@/lib/models/flow";
import { Handle, Position } from "@xyflow/react";

export const CustomNode = ({
  data,
  type,
}: {
  data: NodeData;
  type?: string;
}) => {
  console.log(type);
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div
            onContextMenu={(e) => {
              console.log(e);
              e.preventDefault();
            }}
            className="px-4 py-2 w-32 max-h-20 text-center"
          >
            <p>{data.label}</p>
            {data.description && data.description.length > 0 && (
              <p className="text-xs text-muted-foreground line-clamp-2">
                {data.description}
              </p>
            )}
          </div>
        </ContextMenuTrigger>
      </ContextMenu>

      <Handle type="source" position={Position.Bottom} />
    </>
  );
};
