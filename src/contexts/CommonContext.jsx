import { createContext, useState } from "react"
import PropTypes from 'prop-types'


export const Context = createContext();

// eslint-disable-next-line no-unused-vars
export const ContextProvider = ({children}) => {
    const [selectPlan, setSelectPlan] = useState(false)
  return (
    <Context.Provider value={{selectPlan, setSelectPlan}}>
        {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
    children: PropTypes.node 
}

