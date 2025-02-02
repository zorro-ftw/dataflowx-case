import { ReactNode } from "react";
import { TeamProvider } from "./TeamContext";
import { DialogProvider } from "./DialogContext";

export const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <DialogProvider>
      <TeamProvider>{children}</TeamProvider>
    </DialogProvider>
  );
};
