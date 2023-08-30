import HeaderPoke from "../../components/HeaderPoke";
import { Outlet } from "react-router-dom";

export default function PokeHome() {
    return(
        <>
            <HeaderPoke /> 
            <Outlet />
        </>
    )
}