import { useContext } from "react";
import { AppStateContext } from "./store";
export default function useAppState() {
  const context = useContext(AppStateContext);
  return context;
}
