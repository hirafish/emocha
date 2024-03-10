const LinkButton=({svgIcon,pageName,link,isCurrentPage})=>{
    return (
        <a href={link} className={isCurrentPage?"border-gray-800 bg-gray-300 text-black block py-4 px-12 border-l-4 hover:bg-gray-300 hover:text-black":"text-gray-600 block py-4 px-12 border-l-4 hover:bg-gray-300 hover:text-black"}>
                        <span className="inline-block align-text-bottom mr-2 w-4 h-4">
                            <img src={svgIcon} />
                        </span>
                        {pageName}
                    </a>
    )
}
export default LinkButton;