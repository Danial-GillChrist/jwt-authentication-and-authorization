import { Outlet } from "react-router";
import Header from "../Components/Header";

const Layout=()=>{
    return(
        <div className="layoutBox">
           <Header/>
           <Outlet/> {/* renders the child routes */}
        </div>
    )
}


export default Layout;