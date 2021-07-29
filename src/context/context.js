import React, {useState, createContext} from 'react'

export const ServiceCardIDContext = createContext();

const Context = ({children}) => {

    const [idContext, setIdContext] = useState(0);

    return(
        <ServiceCardIDContext.Provider value={[idContext, setIdContext]}>
            {children}
        </ServiceCardIDContext.Provider>
    )
}

export default Context;