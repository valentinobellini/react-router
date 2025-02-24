import { NavLink } from "react-router-dom";


export default function Navbar() {


    return (
        <>
            <div className="container">
                <ul>
                    <li >
                        <NavLink to='/home'>HOME</NavLink>
                    </li>
                    <li >
                        <NavLink to='/posts'>POSTS</NavLink>
                    </li>
                    <li >
                        <NavLink to='/about'>ABOUT</NavLink>
                    </li>
                </ul>
            </div>

        </>
    )
}
