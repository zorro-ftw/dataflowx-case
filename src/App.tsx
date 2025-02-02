import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="text-red-500">
      asd
      <Button variant="link" onClick={() => console.log("clicked")}>
        Click me
      </Button>
    </div>
  );
}

export default App;
