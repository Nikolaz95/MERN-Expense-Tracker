import DashBoardPage from "../page/BackendPage/AdminPage/DashBoardPage/DashBoardPage";
import ListOfUsers from "../page/BackendPage/AdminPage/ListOfUsers/ListOfUsers";

export const AdminRoutes = [
    {
        path: "/admin/dashBoard",
        element: (
            <DashBoardPage />
        )
    },
    {
        path: "/admin/listOfUsers",
        element: (
            < ListOfUsers />
        )
    },
    /* {
        path: "/admin/dataFacts",
        element: (
            <DataFact />
        )
    }, */

]