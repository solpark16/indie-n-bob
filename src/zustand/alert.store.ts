import { create } from "zustand";

interface AlertState {
  showAlert: boolean;
  alertTitle: string;
  alertMessage: string;
  setAlert: (show: boolean, title: string, message: string) => void;
}

export const useAlertStore = create<AlertState>((set) => ({
  showAlert: false,
  alertTitle: "",
  alertMessage: "",
  setAlert: (show, title, message) =>
    set({ showAlert: show, alertTitle: title, alertMessage: message }),
}));
