import { useNavigate } from "react-router-dom";
import { useLazyLogoutQuery } from "../../redux/api/authApi";
import { useSelector } from "react-redux";
import toast from 'react-hot-toast';



const useAuthBtnFunction = () => {

    const navigate = useNavigate();
    const [logout] = useLazyLogoutQuery();
    const { user, isAuthenticated } = useSelector((state) => state.auth);

    const handleLogOut = async () => {
        try {
            await logout().unwrap();
            localStorage.removeItem('token');
            navigate("/", { replace: true });
            window.location.reload();
        } catch (err) {
            toast.error(err?.data?.message || "Logout failed");
        }
    };

    return {
        user,
        isAuthenticated,
        handleLogOut
    };

}

export default useAuthBtnFunction;
