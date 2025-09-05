import { NavLink, useNavigate } from "react-router";

const Header =()=>{
    const navigation = useNavigate()

    const handelLogOut=()=>{
        localStorage.removeItem('token');
        alert('Do you wanted to LogOut?');
        navigation('/login');
    }

    return(
        <header className="p-4 shadow">
           <div className="xl:max-w-[1200px] mx-auto">
              <div className="flex justify-between">
                    <div className="logo">
                        <h2>Logo</h2>
                    </div>
                    <nav>
                        <ul className="flex justify-around gap-6">
                            <li>
                              <NavLink to='/profile'>Profile</NavLink>
                            </li>
                            <li>
                                <span className="cursor-pointer" onClick={handelLogOut } title="Logout">Logout</span>
                            {/* <NavLink onClick={handelLogOut} to='/login'></NavLink> */}
                            </li>
                        </ul>
                    </nav>
              </div>
            </div> 
        </header>
    )
}

export default Header;