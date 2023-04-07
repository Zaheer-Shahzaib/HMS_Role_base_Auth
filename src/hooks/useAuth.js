import { useContext } from "react";
import AuthContext from "../context/authprovider";
const useAuth=()=>{
    const auth=useContext(AuthContext);
    return auth;

}
export default useAuth;
