import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogContext } from "@/lib/contexts/DialogContext";
import { useContext } from "react";
import { MemberForm } from "./MemberForm";

export const MemberFormDialog = () => {
  const { isAddMemberDialogOpen, setIsAddMemberDialogOpen } =
    useContext(DialogContext);
  return (
    <Dialog
      open={isAddMemberDialogOpen}
      onOpenChange={(open) => setIsAddMemberDialogOpen(open)}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Member</DialogTitle>
          <DialogDescription>Add a new member to a team.</DialogDescription>
        </DialogHeader>
        <MemberForm />
      </DialogContent>
    </Dialog>
  );
};
