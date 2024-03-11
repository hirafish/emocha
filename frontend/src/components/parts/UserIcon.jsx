import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { IconsCatalogContext } from "../providers/IconsCatalogProvider";

const UserIcon=({image,color,size})=>{
    const iconsCatalog=useContext(IconsCatalogContext);

    const fontAwesomeValue=iconsCatalog.image[image].fontAwesomeValue;
    const tailwindClass=iconsCatalog.color[color].tailwindClass;
    

    return (
        <div className={size?"w-"+size+" h-"+size+" rounded-full m-auto  border-2 border-white bg-white  flex items-center justify-center":""}>
            {fontAwesomeValue?<FontAwesomeIcon icon={fontAwesomeValue+" fa-solid"} className={"rounded-full w-2/3 h-2/3 "+tailwindClass} />:""}            
        </div>
    );
};

export default UserIcon;