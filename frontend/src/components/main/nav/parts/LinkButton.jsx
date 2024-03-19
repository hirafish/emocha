import { NavLink } from "react-router-dom";

const LinkButton=({svgIcon,pageName,to})=>{
    return (
        <NavLink to={to} className="navLink text-gray-600 block py-4 px-12 border-l-4 hover:bg-gray-300 hover:text-black dark:text-gray-100 dark:hover:bg-gray-900 dark:hover:border-gray-900 dark:hover:text-white dark:border-gray-800" >
            <span className="inline-block align-text-bottom mr-2 w-4 h-4 dark:text-white">
                <img src={svgIcon} className="dark:text-white" />
            </span>
            {pageName}
        </NavLink>
    )
}
export default LinkButton;