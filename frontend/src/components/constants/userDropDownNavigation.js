import { DashBoard, DefoultProfile } from "../../assets/SideBarIcons";



// Osnovni linkovi koje vidi svaki ulogirani korisnik
export const baseUserLinks = [
    {
        id: 1,
        path: "/user/settings-Profile",
        label: "Profile",
        /*  icon: DefoultProfile */
    },
];

// Linkovi koje vidi samo Admin
export const adminLinks = [
    {
        id: 0,
        path: "/dashboard",
        label: "Dashboard",
        /* icon: DashBoard */
    }
];