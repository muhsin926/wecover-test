import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext();

// eslint-disable-next-line no-unused-vars
export const ContextProvider = ({ children }) => {
  const [selectPlan, setSelectPlan] = useState(false);
  const [selectedCo, setSelectedCo] = useState([]);
  const [multiStep, setMultiStep] = useState(0);
  return (
    <Context.Provider
      value={{
        selectPlan,
        setSelectPlan,
        selectedCo,
        setSelectedCo,
        multiStep,
        setMultiStep,
      }}
    >
      {children}
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};
