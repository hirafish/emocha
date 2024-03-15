const Tooltip=()=>{
    const slangList=[
        {shortcodes:"💅",meaning:"I do't care"},
        {shortcodes:"🥑",meaning:"basic"},
        {shortcodes:"🧢",meaning:"lie"}
        ]
    return(
        <>
            {slangList?
            <div className="absolute top-[2.8em] flex flex-col hidden group-hover:flex w-[280px] ml-6">
                <div className="w-3 h-3 -mb-2 rotate-45 bg-white opacity-70 ml-8"></div>
                <span className="relative z-10 text-xs p-2 px-6 leading-none whitespace-no-wrap bg-white shadow-lg w-full rounded-full opacity-70">
                    <span className="w-full flex flex-col justify-center items-center">
                        {slangList.map((slangObj,index)=>{
                            return(
                            <p key={index} className="h-4 flex items-center">{slangObj.shortcodes} means " {slangObj.meaning} "</p>
                            )
                        })}
                    </span>
                </span>
            </div>
            :""}
        </>
    );
};

export default Tooltip;