"use client";
import  { createContext,useContext } from "react";

type Theme = {
    colors: {
        primary:string;
        secondray: string;
    };
};
const defaultTheme: Theme = {
    colors:{
        primary: "#0000ff",
        secondray: "#00ff00",
    },
};
const ThemeContxt = createContext<Theme>(defaultTheme);
export const themeProvider = ({ children}:{children:React.ReactNode} )=>{
    return (
        <ThemeContxt.Provider value={defaultTheme}>
            {children}
        </ThemeContxt.Provider>
    );
    
};
export const useTheme = ()=> useContext(ThemeContxt);