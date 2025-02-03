import { Navbar } from "@/components/custom/Navbar/Navbar";
import { FormButtons } from "@/components/custom/FormButtons/FormButtons";

function App() {
  return (
    <div className="w-full h-full max-h-screen space-y-4">
      <Navbar />
      <h1 className="text-3xl font-bold text-center">Hi there 👋🏼</h1>
      <p className="text-center text-xl text-muted-foreground">
        Start by creating your team and then you can add members to any team
      </p>
      <FormButtons />
    </div>
  );
}

export default App;
