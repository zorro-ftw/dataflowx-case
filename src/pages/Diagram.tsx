import { Flow } from "@/components/custom/Flow/Flow";
import { Navbar } from "@/components/custom/Navbar/Navbar";

import "@xyflow/react/dist/style.css";

function Diagram() {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="w-full grow overflow-hidden p-4">
        <Flow />
      </div>
    </div>
  );
}

export default Diagram;
