import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { UserIconsCatalogContext } from "./providers/UserIconsCatalogProvider";

const UserIcon=({icon,color})=>{
    const userIconsCatalog=useContext(UserIconsCatalogContext);

    const fontAwesomeValue=userIconsCatalog.icon[icon].fontAwesomeValue
    const tailwindClass=userIconsCatalog.color[color].tailwindClass

    return (
        <div className="w-32 h-32 rounded-full m-auto mt-16 border-2 border-white bg-white shadow-lg flex items-center justify-center">
            {fontAwesomeValue?<FontAwesomeIcon icon={fontAwesomeValue+" fa-solid"} className={"rounded-full w-2/3 h-2/3 "+tailwindClass} />:""}
            
        </div>
    );
};

export default UserIcon;