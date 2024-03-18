import { NavLink } from "react-router-dom";

const IndexPage=()=>{
    return (
        <div>
            <header>
                ヘッダー
            </header>
            <div>
                ログイン / サインアップページ
            </div>
            <NavLink to={"/main/home"} className="navLink bg-gray-400 cursor-pointer">
                ログイン時のリンク（ホームページに遷移）
            </NavLink>
            <NavLink to={"/setup"} className="navLink bg-gray-400 cursor-pointer">
                サインアップ時のリンク（Setupページに遷移）
            </NavLink>
        </div>
    );
};

export default IndexPage;