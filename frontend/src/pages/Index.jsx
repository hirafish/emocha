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
                リンク
            </NavLink>
        </div>
    );
};

export default IndexPage;