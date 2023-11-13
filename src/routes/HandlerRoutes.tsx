import Login from "../pages/Login/Login";
import { AuthRoutes } from "./AuthRoutes";

export default function HandlerRoutes() {
    const username = null;

    if(!username) return <Login/>;

    return <AuthRoutes/>

        
}
