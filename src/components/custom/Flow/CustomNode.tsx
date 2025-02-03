import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { TeamContext } from "@/lib/contexts/TeamContext";
import { NodeData, NodeType } from "@/lib/models/flow";
import { Handle, Position } from "@xyflow/react";
import { Eye, EyeOff, Trash } from "lucide-react";
import { useContext, useMemo } from "react";

export const CustomNode = ({
  data,
  type,
  id,
}: {
  data: NodeData;
  id: string;
  type?: NodeType;
}) => {
  const { toggleTeamMemberDisplay, getTeam, removeMemberFromTeam } =
    useContext(TeamContext);

  const { team, memberId } = useMemo(() => {
    if (type === NodeType.TEAM) {
      const team = getTeam(id);
      return { team, memberId: undefined };
    }

    const [teamId, memberId] = id.split(":");
    const team = getTeam(teamId);
    return { team, memberId };
  }, [getTeam, id, type]);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="px-4 py-2 w-32 max-h-20 text-center">
            <p>{data.label}</p>
            {data.description && data.description.length > 0 && (
              <p className="text-xs text-muted-foreground line-clamp-2">
                {data.description}
              </p>
            )}
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-fit max-w-64 text-xs text-muted-foreground">
          {type === NodeType.TEAM && (
            <ContextMenuItem
              onClick={() => {
                toggleTeamMemberDisplay(id);
              }}
            >
              {team?.membersHidden ? (
                <>
                  <Eye className="h-4 w-4 min-w-4 mr-2" />
                  <span>Show members</span>
                </>
              ) : (
                <>
                  <EyeOff className="h-4 w-4 min-w-4 mr-2" />
                  <span>Hide members</span>
                </>
              )}
            </ContextMenuItem>
          )}
          {type === NodeType.MEMBER && (
            <ContextMenuItem
              onClick={() => {
                removeMemberFromTeam(team?.id ?? "", memberId ?? "");
              }}
            >
              <Trash className="h-4 w-4 min-w-4 mr-2" />
              Remove member
            </ContextMenuItem>
          )}
        </ContextMenuContent>
      </ContextMenu>

      <Handle type="source" position={Position.Bottom} />
    </>
  );
};
