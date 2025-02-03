import { ReactNode } from "react";
import { TeamProvider } from "./TeamContext";
import { DialogProvider } from "./DialogContext";
import { ReactFlowProvider } from "@xyflow/react";

export const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <DialogProvider>
      <TeamProvider>
        <ReactFlowProvider>{children}</ReactFlowProvider>
      </TeamProvider>
    </DialogProvider>
  );
};
