import { TeamContext } from "@/lib/contexts/TeamContext";
import { createTeamFormSchema } from "@/lib/schemas/createTeamFormSchema";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TeamFormBody } from "./TeamFormBody";
import { Form } from "@/components/ui/form";
import { DialogContext } from "@/lib/contexts/DialogContext";
import { useToast } from "@/hooks/use-toast";

export const TeamForm = () => {
  const { createTeam } = useContext(TeamContext);
  const { setIsCreateTeamDialogOpen } = useContext(DialogContext);
  const { toast } = useToast();

  const createTeamForm = useForm<z.infer<typeof createTeamFormSchema>>({
    resolver: zodResolver(createTeamFormSchema),
  });

  const onFormSubmit = createTeamForm.handleSubmit(async (data) => {
    try {
      // This is here to simulate an API call
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 1200));
      createTeam(data);
      setIsCreateTeamDialogOpen(false);
      toast({
        title: "Team created",
        description: "Your team has been created successfully",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong",
        description: error?.toString(),
        variant: "destructive",
      });
    } finally {
      createTeamForm.reset();
    }
  });

  return (
    <Form {...createTeamForm}>
      <form onSubmit={onFormSubmit} className="space-y-4">
        <TeamFormBody />
      </form>
    </Form>
  );
};
