import { useContext } from "react";
import { DialogContext } from "./lib/contexts/DialogContext";
import { Button } from "./components/ui/button";
import { Navbar } from "./components/custom/Navbar/Navbar";

function App() {
  const { setIsCreateTeamDialogOpen, setIsAddMemberDialogOpen } =
    useContext(DialogContext);
  return (
    <div className="w-full h-full max-h-screen">
      <Navbar />
      <div className="w-full h-max flex items-center justify-center pt-20">
        <Button onClick={() => setIsCreateTeamDialogOpen(true)}>
          Create Team
        </Button>
        <Button onClick={() => setIsAddMemberDialogOpen(true)} className="ml-2">
          Add Member
        </Button>
      </div>
    </div>
  );
}

export default App;
