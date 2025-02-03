import { Flow } from "@/components/custom/Flow/Flow";
import { FormButtons } from "@/components/custom/FormButtons/FormButtons";
import { Navbar } from "@/components/custom/Navbar/Navbar";

import "@xyflow/react/dist/style.css";

function Diagram() {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      <Navbar />
      <div className="relative w-full grow overflow-hidden p-4">
        <Flow />
        <FormButtons
          iconMode
          className="absolute top-8 right-8 w-fit h-fit"
          buttonClassName="h-fit px-2"
        />
      </div>
    </div>
  );
}

export default Diagram;
