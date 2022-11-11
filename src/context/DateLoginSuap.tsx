import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ChildrenProps = {
    children: ReactNode;
}

type DateLoginSuapContextProps = {
    dataUserSuap: any;
    setDataUserSuap: any;
}
const DateLoginSuapContext = createContext<DateLoginSuapContextProps>({} as DateLoginSuapContextProps);


export const DateLoginSuapProvider = ({ children }: ChildrenProps) => {
    
    const [dataUserSuap, setDataUserSuap] = useState<any>();


    return (
        <DateLoginSuapContext.Provider value={{ dataUserSuap ,setDataUserSuap }}>
            {children}
        </DateLoginSuapContext.Provider>
    )
}

export const useDateLoginSuap = () => {
    const context = useContext(DateLoginSuapContext)

    return context;
}