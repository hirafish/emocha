const Settings=()=>{
    const userIcon="./logo192.png";
    const userName="りんごらてオバケ";

    return (
        <div className="main-body container m-auto w-11/12 h-full flex flex-col">
        <div>
            <h1 className="text-3xl text-gray-700 py-1 my-4 border-b-2 border-gray-200">Settings</h1>
        </div>
        <div className="flex-1 container flex flex-col items-center justify-center my-8">
            <h2 className="text-xl py-1 mb-4 border-b-2 border-gray-200">Icon</h2>
            <div className="w-32 h-32 rounded-full m-auto mb-4 border-2 border-white bg-white">
                <img src={userIcon} alt="user" className="block rounded-full" />
            </div>
            <div className="flex justify-evenly w-full max-w-xs mx-auto">
                <form className="w-full">
                    <select id="countries" className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="otter">Otter</option>
                    <option value="horse">Horse</option>
                    </select>
                </form>
                <button type="button" className="ml-2 inline-flex items-center justify-center px-5 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 rounded-md bg-blue-500 hover:bg-neutral-900 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:shadow-outline focus:outline-none">
                    Save
                </button>
            </div>                                              
        </div>
        <div className="flex-1 container flex flex-col items-center justify-center my-8">
            <h2 className="text-xl py-1 mb-4 border-b-2 border-gray-200">Account name</h2>
            <div className="flex justify-evenly w-full max-w-xs mx-auto">
                <input type="text" placeholder="Name" className="flex w-full h-10 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50" />
                <button type="button" className="ml-2 inline-flex items-center justify-center px-5 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 rounded-md bg-blue-500 hover:bg-neutral-900 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:shadow-outline focus:outline-none">
                    Save
                </button>
            </div>
        </div>
        <div className="flex-1 container flex flex-col items-center justify-center my-8 mb-16">
            <h2 className="text-xl py-1 mb-4 border-b-2 border-gray-200">Language</h2>
            <div className="flex justify-evenly w-full max-w-xs mx-auto">
                <form className="w-full">
                    <select id="countries" className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 px-3 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="en">English</option>
                    <option value="ja">日本語</option>
                    </select>
                </form>
                <button type="button" className="ml-2 inline-flex items-center justify-center px-5 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 rounded-md bg-blue-500 hover:bg-neutral-900 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:shadow-outline focus:outline-none">
                    Save
                </button>
            </div>      
        </div>
    </div>

    )
};

export default Settings;