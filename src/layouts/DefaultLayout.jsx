import { Outlet } from "react-router-dom";
import SearchBar from "../pages/SearchBar";

function DefaultLayout() {
    return (
        <div>
            <SearchBar />
            <Outlet />
        </div>
    );
}

export default DefaultLayout
