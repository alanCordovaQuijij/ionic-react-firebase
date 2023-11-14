import { useState, createContext } from "react"
import { AuthContextTypes } from "./AuthContext.types";
import {v4 as uuidv4} from "uuid";

export const AuthContext = createContext<AuthContextTypes.Context>({
    userId:"",
    username:"",
    setUsername:(_username) => null,
});

export function AuthProvider(props: any){

    const {children} = props;
    const [username, setUsername] = useState("")
    const userId = uuidv4();

    const data = {
        userId,
        username,
        setUsername,
    }

    return (
    <AuthContext.Provider value = {data}>
        {children}
    </AuthContext.Provider>
)
}