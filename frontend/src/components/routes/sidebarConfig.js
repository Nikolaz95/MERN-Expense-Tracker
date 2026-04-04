


import { CurrencyExchange, DashBoard, DataAnalytic, DeleteAccount, Expenses, Incoms, Transactions, UpdatePassword, UpdateProfile, UploadImage, UserIcon, UserList, UserSettings } from "../../assets/SideBarIcons"
import { PATHS } from "./SideBarPaths"


// ─── ADMIN ───────────────────────────────────────────
const adminSidebar = [
    {
        id: 0,
        titleName: "Dashboard",
        icon: DashBoard,
        dropDownList: [
            {
                title: "Dashboard",
                path: PATHS.ADMIN.DASHBOARD,
                icon: DashBoard
            },
            {
                title: "List of Users",
                path: PATHS.ADMIN.LIST_OF_USERS,
                icon: UserList
            },
            {
                title: "Data Facts",
                path: PATHS.ADMIN.DATA_FACTS,
                icon: DataAnalytic
            }
        ]
    }
]

// ─── USER PROFILE ─────────────────────────────────────
const userSidebar = [
    {
        id: 1,
        titleName: "User Profile",
        icon: UserSettings,
        dropDownList: [
            {
                title: "Profile Info",
                path: PATHS.USER.SETTINGS_PROFILE,
                icon: UserIcon
            },
            {
                title: "Update Profile",
                path: PATHS.USER.UPDATE_PROFILE,
                icon: UpdateProfile
            },
            {
                title: "Upload Picture",
                path: PATHS.USER.UPDATE_PICTURE,
                icon: UploadImage
            },
            {
                title: "Update Password",
                path: PATHS.USER.UPDATE_PASSWORD,
                icon: UpdatePassword
            },
            {
                title: "Delete Account",
                path: PATHS.USER.DELETE_ACCOUNT,
                icon: DeleteAccount
            }
        ]
    },
]

// ─── TRACKER ──────────────────────────────────────────
const trackerSidebar = [
    {
        id: 2,
        titleName: "Tracker",
        /* icon: UserContent, */
        dropDownList: [
            {
                title: "Dashboard",
                path: PATHS.USER_EXPENSE_TRACKER.DASHBOARD_USER_PAGE,
                icon: DashBoard
            },
            {
                title: "Transactions",
                path: PATHS.USER_EXPENSE_TRACKER.TRANSACTIONS_USER_PAGE,
                icon: Transactions
            },
            {
                title: "Incomes",
                path: PATHS.USER_EXPENSE_TRACKER.INCOMES_USER_PAGE,
                icon: Incoms
            },
            {
                title: "Expenses",
                path: PATHS.USER_EXPENSE_TRACKER.EXPENSES_USER_PAGE,
                icon: Expenses
            },
            {
                title: "Currency Settings",
                path: PATHS.USER_EXPENSE_TRACKER.CURRENCY_SETTINGS_USER_PAGE,
                icon: CurrencyExchange
            }
        ]
    }
]


// ─── EXPORT ───────────────────────────────────────────
export const SIDEBAR_CONFIG = {
    admin: [...adminSidebar, ...userSidebar, ...trackerSidebar],
    user: [...userSidebar, ...trackerSidebar],
}

// Za backend sidebar - bez trackera
export const DASHBOARD_SIDEBAR_CONFIG = {
    admin: [...adminSidebar, ...userSidebar],
    user: [...userSidebar],
}

export const EXPENSE_SIDEBAR_LINKS = trackerSidebar[0].dropDownList