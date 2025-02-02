import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TeamForm } from "./TeamForm";
import { useContext } from "react";
import { DialogContext } from "@/lib/contexts/DialogContext";

export const TeamFormDialog = () => {
  const { isCreateTeamDialogOpen, setIsCreateTeamDialogOpen } =
    useContext(DialogContext);
  return (
    <Dialog
      open={isCreateTeamDialogOpen}
      onOpenChange={(open) => setIsCreateTeamDialogOpen(open)}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Team</DialogTitle>
          <DialogDescription>
            Create a new team to collaborate with your friends.
          </DialogDescription>
        </DialogHeader>
        <TeamForm />
      </DialogContent>
    </Dialog>
  );
};
