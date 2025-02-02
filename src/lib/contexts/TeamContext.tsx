import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Team, TeamMemberOnCreate, TeamOnCreate } from "@/lib/models/team";
import { v4 as uuidv4 } from "uuid";
interface TeamContextValue {
  createTeam: (team: TeamOnCreate) => void;
  editTeam: (team: Team) => void;
  teams: Team[];
  addMemberToTeam: (teamId: string, member: TeamMemberOnCreate) => void;
  removeMemberFromTeam: (teamId: string, memberId: string) => void;
}

export const TeamContext = createContext<TeamContextValue>(
  {} as TeamContextValue
);

export const TeamProvider = ({ children }: { children: ReactNode }) => {
  const [teams, setTeams] = useState<Team[]>([]);

  const createTeam = useCallback(
    (team: TeamOnCreate) => {
      setTeams([...teams, { ...team, id: uuidv4(), members: [] }]);
    },
    [teams]
  );

  const editTeam = useCallback(
    (team: Team) => {
      const index = teams.findIndex((t) => t.id === team.id);
      if (index === -1) return;
      const newTeams = [...teams];
      newTeams[index] = team;
      setTeams(newTeams);
    },
    [teams]
  );

  const removeMemberFromTeam = useCallback(
    (teamId: string, memberId: string) => {
      const index = teams.findIndex((t) => t.id === teamId);
      if (index === -1) return;
      const newTeams = [...teams];
      newTeams[index].members = newTeams[index].members.filter(
        (m) => m.id !== memberId
      );
      setTeams(newTeams);
    },
    [teams]
  );

  const addMemberToTeam = useCallback(
    (teamId: string, member: TeamMemberOnCreate) => {
      const index = teams.findIndex((t) => t.id === teamId);
      if (index === -1) return;
      const newTeams = [...teams];
      newTeams[index].members.push({ ...member, id: uuidv4() });
      setTeams(newTeams);
    },
    [teams]
  );

  const contextValue: TeamContextValue = useMemo(() => {
    return {
      teams,
      createTeam,
      editTeam,
      addMemberToTeam,
      removeMemberFromTeam,
    };
  }, [addMemberToTeam, createTeam, editTeam, removeMemberFromTeam, teams]);
  return (
    <TeamContext.Provider value={contextValue}>{children}</TeamContext.Provider>
  );
};
