import Header from "../components/Header";
import Navigation from "../components/nav/Navigation";

const Slangs=()=>{
    return(
        <div className='flex h-full'>
            <Navigation />
            <div className="flex-1 bg-gray-100 w-full h-full">
                <div className="main-body container m-auto w-11/12 h-full flex flex-col">
                    <Header />
                    <div className="main flex-1 flex flex-col min-h-0">
                        <div className="lg:block heading flex-2">
                            <h1 className="text-xl py-1 xl:text-3xl xl:text-gray-700 xl:mb-4 border-b-2 border-gray-200">Slangs</h1>
                        </div>
                        <div className="flex-1 h-full flex items-center justify-center">
                            <p className="text-5xl text-gray-700 mb-16">coming soon ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Slangs;