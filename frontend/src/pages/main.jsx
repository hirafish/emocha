import Navigation from "../components/main/nav/Navigation";
import { Outlet } from 'react-router-dom';

const MainLayout=()=>{
    return (
        <div className='flex h-full'>
            <Navigation />
            <div className="flex-1 bg-gray-100 w-full h-full">
            <div className="main-body container m-auto w-11/12 h-full flex flex-col">
            <header className="py-4 flex-2 flex flex-row">
                <div className="flex-1">
                    <span className="xl:hidden inline-block text-gray-700 hover:text-gray-900 align-bottom">
                        <span className="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                            <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </span>
                    </span>
                    <span className="lg:hidden inline-block ml-8 text-gray-700 hover:text-gray-900 align-bottom">
                        <span className="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                            <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </span>
                    </span>
                </div>
                <div className="flex-1 text-right">
                    <span className="inline-block text-gray-700">
                        Status: <span className="inline-block align-text-bottom w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span> <b>Online</b>
                        <span className="inline-block align-text-bottom">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4"><path d="M19 9l-7 7-7-7"></path></svg>
                        </span>
                    </span>
                </div>
            </header>
            <Outlet />
            </div>
            </div>
        </div>
    );
}

export default MainLayout;