import { Routes, Route } from "react-router-dom";
import Home from '../../pages/Home';
import Chat from '../../pages/Chat';
import Slangs from "../../pages/Slangs";
import Settings from '../../pages/Settings';

const Router=()=>{
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/slangs" element={<Slangs />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    );
};

export default Router;