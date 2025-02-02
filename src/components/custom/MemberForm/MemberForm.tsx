import { Form } from "@/components/ui/form";
import { TeamContext } from "@/lib/contexts/TeamContext";
import { TeamMemberOnCreate } from "@/lib/models/team";
import { addMemberFormSchema } from "@/lib/schemas/addMemberFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { MemberFormBody } from "./MemberFormBody";
import { DialogContext } from "@/lib/contexts/DialogContext";
import { useToast } from "@/hooks/use-toast";

export const MemberForm = () => {
  const { addMemberToTeam } = useContext(TeamContext);
  const { setIsAddMemberDialogOpen } = useContext(DialogContext);
  const { toast } = useToast();

  const addMemberForm = useForm<z.infer<typeof addMemberFormSchema>>({
    resolver: zodResolver(addMemberFormSchema),
  });

  const onFormSubmit = addMemberForm.handleSubmit(
    async (data: TeamMemberOnCreate) => {
      try {
        // This is here to simulate an API call
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 1200)
        );
        addMemberToTeam(data);
        setIsAddMemberDialogOpen(false);
        toast({
          title: "Member added",
          description: "The member has been added successfully",
        });
      } catch (error) {
        console.error(error);
        toast({
          title: "Something went wrong",
          description: error?.toString(),
          variant: "destructive",
        });
      } finally {
        addMemberForm.reset();
      }
    }
  );

  return (
    <Form {...addMemberForm}>
      <form onSubmit={onFormSubmit} className="space-y-4">
        <MemberFormBody />
      </form>
    </Form>
  );
};
