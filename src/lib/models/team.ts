export type Team = {
  id: string;
  name: string;
  description?: string;
  members: TeamMember[];
};

export type TeamOnCreate = Omit<Team, "id" | "members">;

export type TeamMember = {
  id: string;
  name: string;
  description?: string;
};

export type TeamMemberOnCreate = Omit<TeamMember, "id">;
