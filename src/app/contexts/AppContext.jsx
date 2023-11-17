import { createContext, useState, useContext } from "react";

const defaultAppContext = {
  project: null,
  setProject: null,
};

const AppContext = createContext(defaultAppContext);

export const useApp = () => useContext(AppContext);
export const AppProvider = ({ children }) => {
  const [project, setProject] = useState([]);
  const [displayProject, setDisplayProject] = useState([]);
  const [filterProject, setFilterProject] = useState([]);

  return (
    <AppContext.Provider
      value={{
        project,
        setProject,
        displayProject,
        setDisplayProject,
        filterProject,
        setFilterProject,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
