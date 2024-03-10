import LinkButton from "./LinkButton";

const Navigation=()=>{
    const userIcon="./logo192.png";
    const userName="りんごらてオバケ";
    return (
        <div className="hidden xl:block sm:flex-2 w-64 bg-gray-200">
                <div className="user-profile text-center">
                    <div className="w-32 h-32 rounded-full m-auto mt-16 border-2 border-white bg-white shadow-lg">
                        <img src={userIcon} alt="user" className="block rounded-full"/>
                    </div>
                    <div className="text-gray-800 mt-8">
                        {userName}
                        <span className="inline-block align-text-bottom">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4"><path d="M19 9l-7 7-7-7"></path></svg>
                        </span>
                    </div>
                </div>

                <div className="menu mt-8">
                    <LinkButton svgIcon={"./navIcon/home.svg"} pageName={"Home"} link={"./"} isCurrentPage={true} />
                    <LinkButton svgIcon={"./navIcon/chat.svg"} pageName={"Chat"} link={"./"} isCurrentPage={false} />
                    <LinkButton svgIcon={"./navIcon/slangs.svg"} pageName={"My slangs"} link={"./"} isCurrentPage={false} />
                    <LinkButton svgIcon={"./navIcon/settings.svg"} pageName={"Settings"} link={"./"} isCurrentPage={false} />
                </div>
            </div>
    )
};

export default Navigation;