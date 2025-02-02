import { Form } from "@/components/ui/form";
import { TeamContext } from "@/lib/contexts/TeamContext";
import { TeamMemberOnCreate } from "@/lib/models/team";
import { addMemberFormSchema } from "@/lib/schemas/addMemberFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { MemberFormBody } from "./MemberFormBody";

export const MemberForm = () => {
  const { addMemberToTeam } = useContext(TeamContext);

  const addMemberForm = useForm<z.infer<typeof addMemberFormSchema>>({
    resolver: zodResolver(addMemberFormSchema),
  });

  const onFormSubmit = addMemberForm.handleSubmit(
    (data: TeamMemberOnCreate) => {
      addMemberToTeam(data);
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
