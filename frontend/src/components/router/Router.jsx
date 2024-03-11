import { Routes, Route } from "react-router-dom";
import IndexPage from "../../pages";
import MainLayout from "../../pages/main";
import Home from '../../pages/Home';
import Chat from '../../pages/Chat';
import Slangs from "../../pages/Slangs";
import Settings from '../../pages/Settings';

const Router=()=>{
    return (
        <Routes>
            <Route  path="/" element={<IndexPage />} />
            <Route  path="/main" element={<MainLayout />}>
                <Route  path="/main/home" element={<Home />} />
                <Route  path="/main/chat" element={<Chat />} />
                <Route  path="/main/slangs" element={<Slangs />} />
                <Route  path="/main/settings" element={<Settings />} />
            </Route>
        </Routes>
    );
};

export default Router;