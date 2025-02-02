import { useContext } from "react";
import { DialogContext } from "./lib/contexts/DialogContext";
import { Button } from "./components/ui/button";

function App() {
  const { setIsCreateTeamDialogOpen } = useContext(DialogContext);
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Button onClick={() => setIsCreateTeamDialogOpen(true)}>
        Create Team
      </Button>
    </div>
  );
}

export default App;
