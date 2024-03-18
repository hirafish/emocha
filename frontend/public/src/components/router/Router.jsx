import { Routes, Route } from "react-router-dom";
import IndexPage from "../../pages/Index";
import MainLayout from "../../pages/Main";
import Home from '../main/Home';
import Chat from '../main/Chat';
import Slangs from "../main/Slangs";
import Settings from '../main/Settings';
import Setup from "../../pages/Setup";

const Router=()=>{
    return (
        <Routes>
            <Route  path="/" element={<IndexPage />} />
            <Route path="/setup" element={<Setup />} />
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