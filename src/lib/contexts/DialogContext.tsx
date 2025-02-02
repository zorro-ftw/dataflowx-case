import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface DialogContextValue {
  isCreateTeamDialogOpen: boolean;
  setIsCreateTeamDialogOpen: Dispatch<SetStateAction<boolean>>;
}

export const DialogContext = createContext<DialogContextValue>(
  {} as DialogContextValue
);

export const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [isCreateTeamDialogOpen, setIsCreateTeamDialogOpen] =
    useState<boolean>(false);

  return (
    <DialogContext.Provider
      value={{ isCreateTeamDialogOpen, setIsCreateTeamDialogOpen }}
    >
      {children}
    </DialogContext.Provider>
  );
};
