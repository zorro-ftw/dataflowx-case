import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TeamContext } from "@/lib/contexts/TeamContext";
import { useContext, useMemo } from "react";
import { useFormContext } from "react-hook-form";

export const MemberFormBody = () => {
  const { control } = useFormContext();
  const { teams } = useContext(TeamContext);

  const teamOptions = useMemo(() => {
    return teams.map((team) => ({
      value: team.id,
      label: team.name,
    }));
  }, [teams]);

  return (
    <>
      <FormField
        control={control}
        name="teamId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Team</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select team" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {teamOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea placeholder="Optional" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Add Member</Button>
    </>
  );
};
