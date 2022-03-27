import {createContext} from "react";

export const Token = createContext(sessionStorage.getItem("token"))