import { useContext } from "react";
import { DialogContext } from "./lib/contexts/DialogContext";
import { Button } from "./components/ui/button";

function App() {
  const { setIsCreateTeamDialogOpen, setIsAddMemberDialogOpen } =
    useContext(DialogContext);
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Button onClick={() => setIsCreateTeamDialogOpen(true)}>
        Create Team
      </Button>
      <Button onClick={() => setIsAddMemberDialogOpen(true)} className="ml-2">
        Add Member
      </Button>
    </div>
  );
}

export default App;
