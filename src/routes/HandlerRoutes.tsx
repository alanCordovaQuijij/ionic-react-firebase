import { useAuth } from "../hooks";
import Login from "../pages/Login/Login";
import { AuthRoutes } from "./AuthRoutes";


export default function HandlerRoutes() {

    const {username}  = useAuth();

    console.log(useAuth());
    if(!username) return <Login/>;

    return <AuthRoutes/>

        
}
