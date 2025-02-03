import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DialogContext } from "@/lib/contexts/DialogContext";
import { cn } from "@/lib/utils";
import { UserPlus, Users } from "lucide-react";
import { useContext } from "react";

export const FormButtons = ({
  iconMode,
  className,
  buttonClassName,
}: {
  iconMode?: boolean;
  className?: string;
  buttonClassName?: string;
}) => {
  const { setIsCreateTeamDialogOpen, setIsAddMemberDialogOpen } =
    useContext(DialogContext);
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      <TooltipProvider delayDuration={iconMode ? 200 : 1000}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => setIsCreateTeamDialogOpen(true)}
              className={buttonClassName}
            >
              {iconMode ? <Users className="h-3 w-3" /> : "Create Team"}
            </Button>
          </TooltipTrigger>
          <TooltipContent>Create Team</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={iconMode ? 200 : 1000}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => setIsAddMemberDialogOpen(true)}
              className={buttonClassName}
            >
              {iconMode ? <UserPlus className="h-3 w-3" /> : "Add Member"}
            </Button>
          </TooltipTrigger>
          <TooltipContent>Add Member</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
