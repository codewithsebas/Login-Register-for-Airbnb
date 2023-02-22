import { useContext } from "react";
import Header from "./components/Header";
import {Outlet} from "react-router-dom"
import { UserContext } from "./UserContext";

export default function Layout() {
    const { user } = useContext(UserContext);
    return (
        <>
            {user && <Header />}
            <Outlet />
        </>
    )
}