import { NavLink } from "react-router-dom";


export default function Navbar() {


    return (
        <>
            <div className="container">
                <ul>
                    <li >
                        <NavLink to='/home'></NavLink>
                    </li>
                    <li >
                        <NavLink to='/posts'></NavLink>
                    </li>
                    <li >
                        <NavLink to='/about'></NavLink>
                    </li>
                </ul>
            </div>

        </>
    )
}
