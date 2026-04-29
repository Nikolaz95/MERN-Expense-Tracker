import DashBoardPage from "../page/BackendPage/AdminPage/DashBoardPage/DashBoardPage";
import ListOfUsers from "../page/BackendPage/AdminPage/ListOfUsers/ListOfUsers";
import ProtectRoute from "./ProtectRoute";

export const AdminRoutes = [
    {
        path: "/admin/dashBoard",
        element: (
            <ProtectRoute>
                <DashBoardPage />
            </ProtectRoute>
        )
    },
    {
        path: "/admin/listOfUsers",
        element: (
            <ProtectRoute>
                < ListOfUsers />
            </ProtectRoute>
        )
    },
    /* {
        path: "/admin/dataFacts",
        element: (
            <DataFact />
        )
    }, */

]