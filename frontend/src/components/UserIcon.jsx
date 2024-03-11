import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { UserIconsCatalogContext } from "./providers/UserIconsCatalogProvider";

const UserIcon=({icon,color,size})=>{
    const userIconsCatalog=useContext(UserIconsCatalogContext);

    const fontAwesomeValue=userIconsCatalog.icon[icon].fontAwesomeValue;
    const tailwindClass=userIconsCatalog.color[color].tailwindClass;
    

    return (
        <div className={size?"w-"+size+" h-"+size+" rounded-full m-auto  border-2 border-white bg-white  flex items-center justify-center":""}>
            {fontAwesomeValue?<FontAwesomeIcon icon={fontAwesomeValue+" fa-solid"} className={"rounded-full w-2/3 h-2/3 "+tailwindClass} />:""}            
        </div>
    );
};

export default UserIcon;