import { NavLink } from "react-router-dom";

const LinkButton=({svgIcon,pageName,to})=>{
    return (
        <NavLink to={to} className="navLink text-gray-600 block py-4 px-12 border-l-4 hover:bg-gray-300 hover:text-black" >
            <span className="inline-block align-text-bottom mr-2 w-4 h-4">
                <img src={svgIcon} />
            </span>
            {pageName}
        </NavLink>
    )
}
export default LinkButton;