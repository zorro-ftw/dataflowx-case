import { TeamContext } from "@/lib/contexts/TeamContext";
import { createTeamFormSchema } from "@/lib/schemas/createTeamFormSchema";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TeamFormBody } from "./TeamFormBody";
import { Form } from "@/components/ui/form";

export const TeamForm = () => {
  const { createTeam } = useContext(TeamContext);
  const createTeamForm = useForm<z.infer<typeof createTeamFormSchema>>({
    resolver: zodResolver(createTeamFormSchema),
  });

  const onFormSubmit = createTeamForm.handleSubmit((data) => {
    createTeam(data);
  });

  return (
    <Form {...createTeamForm}>
      {
        <form onSubmit={onFormSubmit} className="space-y-4">
          <TeamFormBody />
        </form>
      }
    </Form>
  );
};
