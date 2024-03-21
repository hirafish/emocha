import { useContext, useState } from "react";
import { IconsCatalogContext } from "../providers/IconsCatalogProvider";
import { LanguagesCatalogContext } from "../providers/LanguagesCatalogProvider";
import { UserSettingsContext } from "../providers/UserSettingsProvider";
import UserIcon from "./globalParts/UserIcon";
import TranslateIconCatalog from "./globalParts/TranslateIconCatalog";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/config";
import { ref, set, get } from "firebase/database";

const Settings = () => {
  // アイコンのデザインセットと言語設定セットを取得
  const iconsCatalog = useContext(IconsCatalogContext);
  const languagesCatalog = useContext(LanguagesCatalogContext);
  // --------------------------------------

  // ユーザ設定を格納するグローバル変数と設定を変更する関数を取得
  const { userSettings, setUserSettings } = useContext(UserSettingsContext);

  // プレビューのための変数
  const [previews, setPreviews] = useState(userSettings);

  // プレビューを更新するハンドラー
  const handleChangeIconImage = (event) => {
    const newImage = event.target.value;
    setPreviews({
      ...previews,
      icon: {
        ...previews.icon,
        image: newImage,
      },
    });
  };
  const handleChangeIconColor = (event) => {
    const newColor = event.target.value;
    setPreviews({
      ...previews,
      icon: {
        ...previews.icon,
        color: newColor,
      },
    });
  };
  const handleChangeName = (event) => {
    const newName = event.target.value;
    setPreviews({
      ...previews,
      name: newName,
    });
  };
  const handleChangeSnsUrl = (event) => {
    const newSnsUrl = event.target.value;
    setPreviews({
      ...previews,
      snsUrl: newSnsUrl,
    });
  };
  const handleChangeLanguage = (event) => {
    const newLanguage = event.target.value;
    setPreviews({
      ...previews,
      language: newLanguage,
    });
  };
  // ---------------------------------------------

  // DBへの送信処理
  const sendUserData = async (postData) => {
    try {
      const userRef = ref(db, `Users/${userSettings.id}`);
      let payload = {
        id: postData.id,
        name: postData.name,
        iconText: "@" + postData.icon.image + ";" + postData.icon.color + ";",
        language: postData.language,
        snsUrl: postData.snsUrl,
      };
      console.log(payload);
      await set(userRef, payload);
      localStorage.setItem("image", postData.icon.image);
      localStorage.setItem("color", postData.icon.color);
      localStorage.setItem("name", postData.name);
      localStorage.setItem("snsUrl", postData.snsUrl);
      localStorage.setItem("language", postData.language);
      return true;
    } catch (error) {
      return false;
    }
  };

  // Sendボタンをクリックした時の処理
  const handleClickSend = async () => {
    const postData = previews;
    console.log(postData);
    try {
      const response = await sendUserData(postData);
      if (response === true) {
        setUserSettings(postData);
        alert("設定を更新しました！");
      } else {
        alert("現在、設定を更新することができません。");
        console.log("更新できませんでした");
      }
    } catch (error) {
      console.log("Fetch Error:", error);
      alert("現在、設定を更新することができません。");
      console.log("更新できませんでした");
    }
  };

  // ----------------------------------------------------
  // アカウント削除の処理
  const navigate = useNavigate();

  const handleClickDeleteAccount = () => {
    // ここでアカウント削除の処理をする
    alert("アカウントを削除しました！");
    navigate("/");
  };
  const tailwindNotShowDeleteAccount = "hidden";
  const tailwindShowDeleteAccount =
    "absolute z-20 top-0 p-1 bottom-0 left-0 right-0 m-auto w-80 md:w-96 h-fit bg-white border border-gray-200 dark:border-gray-700 dark:shadow-gray-800 rounded-lg shadow flex flex-col dark:bg-gray-800";
  const [showDeleteAccount, setShowDeleteAccount] = useState(
    tailwindNotShowDeleteAccount
  );
  const handleClickOpenDeleteAccount = () => {
    setShowDeleteAccount(tailwindShowDeleteAccount);
  };
  const handleClickCloseDeleteAccount = () => {
    setShowDeleteAccount(tailwindNotShowDeleteAccount);
  };

  // ------------------------------------------------

  return (
    <div className="h-full overflow-auto">
      <div className="main flex-1 flex flex-col w-11/12 m-auto">
        <div className="lg:block heading flex-2">
          <h1 className="text-xl py-3 xl:text-3xl xl:text-gray-700 xl:mb-4  dark:text-white">
            {userSettings.language === "English" ? "Settings" : "設定"}
          </h1>
        </div>
        <div className="flex-1  h-full">
          <div className="mx-10 pb-6">
            <div className="container mb-10">
              <div className="containe my-8 w-full">
                <div className="md:flex justify-center">
                  <div className="flex flex-col justify-center items-center md:ml-12">
                    <div className="mb-4 mt-3 w-20 h-20">
                      <UserIcon
                        image={previews.icon.image}
                        color={previews.icon.color}
                        size={20}
                      />
                    </div>
                  </div>
                  <div className="w-full grid gap-6 mb-6 md:grid-cols-2 items-center">
                    <div className="flex flex-col items-center">
                      <div className="w-full md:w-3/4">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          {userSettings.language === "English"
                            ? "Icon image"
                            : "アイコンイメージ"}
                        </label>
                        <form>
                          <select
                            value={previews.icon.image}
                            onChange={handleChangeIconImage}
                            id="iconImages"
                            className="text-center bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            {Object.keys(iconsCatalog.image).map(
                              (image, index) => {
                                return (
                                  <option key={index} value={image}>
                                    {userSettings.language === "English"
                                      ? image
                                      : TranslateIconCatalog(image)}
                                  </option>
                                );
                              }
                            )}
                          </select>
                        </form>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-full md:w-3/4">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          {userSettings.language === "English"
                            ? "Icon color"
                            : "アイコンカラー"}
                        </label>
                        <form className="w-full">
                          <select
                            value={previews.icon.color}
                            onChange={handleChangeIconColor}
                            id="iconColors"
                            className="text-center bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            {Object.keys(iconsCatalog.color).map(
                              (color, index) => {
                                return (
                                  <option key={index} value={color}>
                                    {userSettings.language === "English"
                                      ? color
                                      : TranslateIconCatalog(color)}
                                  </option>
                                );
                              }
                            )}
                          </select>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-3/5 md:pl-12 my-8">
                <label
                  htmlFor="userName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {userSettings.language === "English"
                    ? "User name"
                    : "ユーザー名"}
                </label>
                <input
                  type="text"
                  id="userName"
                  spellCheck={false}
                  value={previews.name}
                  onChange={handleChangeName}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="md:w-3/5 md:pl-12 my-8">
                <label
                  htmlFor="snsUrl"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {userSettings.language === "English"
                    ? "Social account"
                    : "SNSアカウント"}
                </label>
                <input
                  type="url"
                  id="snsUrl"
                  value={previews.snsUrl}
                  onChange={handleChangeSnsUrl}
                  placeholder={
                    userSettings.language === "English"
                      ? "Link to social profile"
                      : "SNSアカウントへのリンクを入力してください"
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="container md:pl-12 my-8">
                <div className="md:w-1/5 min-w-40">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {userSettings.language === "English" ? "Language" : "言語"}
                  </label>
                  <form className="w-full">
                    <select
                      value={previews.language}
                      onChange={handleChangeLanguage}
                      id="languages"
                      className="text-center bg-gray-50 cursor-pointer border border-neutral-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {languagesCatalog.map((language, index) => {
                        return (
                          <option key={index} value={language}>
                            {language}
                          </option>
                        );
                      })}
                    </select>
                  </form>
                </div>
              </div>
            </div>
            <div className=" container md:pl-12 flex justify-center md:justify-start items-center mx-auto">
              <button
                onClick={handleClickSend}
                type="button"
                className="inline-flex items-center justify-center w-36 px-4 py-2.5 text-md font-medium tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:shadow-outline focus:outline-none"
              >
                {userSettings.language === "English" ? "Save" : "保存"}
              </button>
            </div>
            <div className="border-t border-gray-300 mt-10 py-6">
              <div className="md:pl-12">
                <h2
                  id="deleteAccount"
                  className="text-xl py-1 mb-8 border-gray-200 dark:text-white"
                >
                  {userSettings.language === "English"
                    ? "Delete Account"
                    : "アカウント削除"}
                </h2>
                <ul>
                  <li className="my-6 text-lg dark:text-white">
                    {userSettings.language === "English"
                      ? "Deleting your account is permanent and cannot be undone."
                      : "一度アカウントを削除すると、二度と元に戻せません。十分ご注意ください。"}
                  </li>
                </ul>
                <div className="flex justify-center md:justify-start items-center mx-auto">
                  <button
                    onClick={handleClickOpenDeleteAccount}
                    type="button"
                    className="inline-flex items-center justify-center px-4 py-2.5 text-md font-medium tracking-wide text-white transition-colors duration-200 bg-red-500 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:shadow-outline focus:outline-none"
                  >
                    {userSettings.language === "English"
                      ? "Delete account"
                      : "アカウント削除"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={showDeleteAccount}>
        <div className="flex justify-end items-center">
          <span
            onClick={handleClickCloseDeleteAccount}
            className="inline-block text-gray-700 hover:text-gray-900 align-bottom"
          >
            <span className="h-6 w-6 p-1 rounded-md hover:bg-gray-400 dark:hover:bg-gray-700 flex justify-center items-center">
              {/* <img src="/navIcon/close.svg" className="dark:text-white" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="h-5 w-5 dark:text-white"
              >
                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                <path
                  fill="currentColor"
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                />
              </svg>
            </span>
          </span>
        </div>
        <div className="px-2">
          <h3 className="text-xl dark:text-white text-center py-2">
            {userSettings.language === "English"
              ? "Delete account - Are you sure?"
              : "本当にアカウント削除をしますか？"}
          </h3>
          <ul className="px-2">
            <li className="my-6 text-lg dark:text-white">
              {userSettings.language === "English"
                ? "Deleting your account is permanent and cannot be undone."
                : "一度アカウントを削除すると、二度と元に戻せません。十分ご注意ください。"}
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-evenly p-4 pt-0">
          <button
            onClick={handleClickDeleteAccount}
            type="button"
            className=" inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-200 bg-red-600 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 focus:shadow-outline focus:outline-none"
          >
            {userSettings.language === "English"
              ? "Delete account"
              : "アカウント削除"}
          </button>
          <button
            onClick={handleClickCloseDeleteAccount}
            type="button"
            className=" inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 bg-white border rounded-md text-gray-700 hover:text-gray-900 border-gray-300 hover:bg-gray-100 active:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-200/60 focus:shadow-outline"
          >
            {userSettings.language === "English" ? "Cancel" : "キャンセル"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
