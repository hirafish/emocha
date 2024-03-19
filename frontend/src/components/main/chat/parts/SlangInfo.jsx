import DisplayEmojis from "./DisplayEmojis";

const SlangInfo=({slangsList})=>{
    return(
        <>
            {slangsList[0]?
            <div className="absolute top-[2.8em] flex flex-col hidden group-hover:flex w-[280px] ml-6">
                <div className="w-3 h-3 -mb-2 rotate-45 bg-white ml-8 dark:bg-gray-700"></div>
                <span className="relative z-10 text-xs p-2 px-6 leading-none whitespace-no-wrap bg-white shadow-lg w-full rounded-full dark:bg-gray-700">
                    <span className="w-full flex flex-col justify-center items-center">
                        {slangsList.map((slangObj,index)=>{
                            return(
                            <p key={index} className="h-4 flex items-center dark:text-white"><DisplayEmojis emojiShortcodesList={[slangObj.shortcodes]} /> means " {slangObj.meaning} "</p>
                            )
                        })}
                    </span>
                </span>
            </div>
            :""}
        </>
    );
};

export default SlangInfo;