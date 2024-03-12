import { useContext,useState } from "react";
import { NavLink } from "react-router-dom";
import { IconsCatalogContext } from "../components/providers/IconsCatalogProvider";
import { LanguagesCatalogContext } from "../components/providers/LanguagesCatalogProvider";
import { UserSettingsContext } from "../components/providers/UserSettingsProvider";
import UserIcon from "../components/main/globalParts/UserIcon";


const Setup=()=>{
    // 参考までに/home/settingsで使ったコードの簡易版を置いときます（/components/main/Settings.jsxのやつ）
    // Settings.jsxをコンポーネント化したかったけど、データ受け渡しがめんどくさくて、できてないです。。。

    // アイコンのデザインセットと言語設定セットを取得
    const iconsCatalog=useContext(IconsCatalogContext);
    const languagesCatalog=useContext(LanguagesCatalogContext);


    // ユーザ設定を格納するグローバル変数と設定を変更する関数を取得
    const {userSettings,setUserSettings}=useContext(UserSettingsContext);

    // --------------------------------------
    // プレビューのための変数
    const [previews,setPreviews]=useState(userSettings);


    // プレビューを更新するハンドラー
    const handleChangeIconImage=(event)=>{
        const newImage=event.target.value;
        setPreviews(
            {
                ...previews,
                icon:{
                    ...previews.icon,
                    image:newImage
                }
            }
        );
    };
    const handleChangeIconColor=(event)=>{
        const newColor=event.target.value;
        setPreviews(
            {
                ...previews,
                icon:{
                    ...previews.icon,
                    color:newColor
                }
            }
        );
    };
    const handleChangeLanguage=(event)=>{
        const newLanguage=event.target.value;
        setPreviews(
            {
                ...previews,
                language:newLanguage
            }
        );
    };
    // ---------------------------------------------

    // ユーザの設定をフロントエンド全体に反映させる

    // NavLinkボタンをクリックした時の処理
    const handleClickSend=()=>{
        const sendData=previews;
        console.log(sendData);
        try{
            // ここでsendDataをバックエンドにpostする
            // 実行結果（true / false）をもらう
            const response=true; // 実行結果を格納する変数
            if(response===true){
                setUserSettings(sendData);
                alert("設定を更新しました！")
            }else{
                alert("現在、設定を更新することができません。")
                console.log("更新できませんでした");
            };
        }catch(error){
            console.log("Fetch Error:",error);
            alert("現在、設定を更新することができません。")
            console.log("更新できませんでした");
        };
    };

    
    
    return (
        <div>
            <header>
            </header>
            <div>
                <h1>初期設定画面</h1>
                <p>パスワード</p>
                <p>ユーザ設定</p>
                {/* ユーザアイコンを表示するコンポーネント
                image={使用するイメージ名（iconCatalog.imageのキー値）}
                color={使用するカラー（iconCatalog.colorのキー値）} 
                size={アイコンのサイズ}
                sizeに渡す値と親タグ（例のdivタグ）のサイズを一緒にしないとバグるときがある（バグらないように実装できなくてごめん）
                例ならsixe=20,divタグはx-20,h-20みたいな
                */}
                <div className="mb-4 w-20 h-20">
                    <UserIcon image={previews.icon.image} color={previews.icon.color} size={20}/>
                </div>


                {/* アイコンのイメージとカラーをselectタグにする例 */}
                <div>
                <select value={previews.icon.image} onChange={handleChangeIconImage} id="iconImages" >
                    {Object.keys(iconsCatalog.image).map((image,index)=>{
                        return (
                            <option key={index} value={image}>{image}</option>
                        )
                    })}
                </select>
                </div>

                {/* 選べる言語をselectタグにする例 */}
                <div>
                <select value={previews.icon.color} onChange={handleChangeIconColor} id="iconColors" >
                    {Object.keys(iconsCatalog.color).map((color,index)=>{
                        return(
                            <option key={index} value={color}>{color}</option>
                        )
                    })}
                </select>
                </div>
                <div>
                    <select value={previews.language} onChange={handleChangeLanguage} id="languages">
                        {languagesCatalog.map((language,index)=>{
                            return(
                                <option key={index} value={language}>{language}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            {/* NavLinkがaタグの役割をしている */}

            {/* IndexページとSetupページで同じUIのリンクボタンを実装するなら、
            リンクボタンだけコンポーネント化（一つのコードで繰り返し同じ見た目で遷移先が違うリンクボタンとかを使えるようになる）にしても良き

            リンクのコンポーネント化の例としては、components/main/nav/parts/LinkButton.jsxとか（LinkButton.jsxはNavigation.jsxで呼び出してる）

            もし、コンポーネント化するなら、components/globalPartsに新しくファイルを作ってそこにコンポーネント化したものを書いてくれるとありがたいです！ */}
            <NavLink to={"/main/home"} onClick={handleClickSend} className="navLink bg-gray-400 cursor-pointer">
                ホームページに遷移
            </NavLink>
        </div>
    );
};

export default Setup;