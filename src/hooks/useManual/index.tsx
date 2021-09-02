import React, { ReactNode, useContext, useState } from "react";
import { createContext } from "react";
interface initial {
  app: {
    name: string;
    code: string;
    icon: string;
  };
  manual: {
    name: string;
    code: string;
    icon: string;
  };
  active: string;
  handleApp: (data: any) => void;
  handleManual: (data: any) => void;
}
const ManualContext = createContext({} as initial);
type TypeManual = {
  children?: React.ReactNode;
};
function ManualProvider({ children }: TypeManual) {
  const [app, setApp] = useState({} as any);
  const [manual, setManual] = useState({} as any);
  const [active, setActive] = useState("");
  const handleApp = (data: any) => {
    setApp({ name: data.Name, code: data.Code, icon: data.Logo });
    setActive("app");
    setManual({});
  };
  const handleManual = (data: any) => {
    setManual({ name: data.Name, code: data.Code, icon: data.Icon });
    setActive("manual");
  };
  return (
    <ManualContext.Provider
      value={{ app, manual, handleApp, handleManual, active }}
    >
      {children}
    </ManualContext.Provider>
  );
}
export function useManual() {
  return useContext(ManualContext);
}
export default ManualProvider;
