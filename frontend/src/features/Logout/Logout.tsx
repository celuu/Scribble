import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import { Navigate } from "react-router-dom";

const Logout: React.FC = () => {
    const { logout } = useLogout(); 
    const { user } = useAuthContext();

    return (
        <button onClick={(e) => logout()}>Log out</button>
    )
}

export default Logout;