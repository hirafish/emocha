import { createContext, useState, useContext, useEffect } from "react";
import { IconsCatalogContext } from "./IconsCatalogProvider";
import { LanguagesCatalogContext } from "./LanguagesCatalogProvider";
import { auth } from "../../firebase/config";

export const UserSettingsContext = createContext({});

export const UserSettingsProvider = (props) => {
  const { children } = props;

  // アイコンのデザインセットと言語設定セットを取得
  const iconsCatalog = useContext(IconsCatalogContext);
  const languagesCatalog = useContext(LanguagesCatalogContext);

  // ユーザ設定の初期値と設定を変更する関数を定義
  const [userSettings, setUserSettings] = useState({
    icon: {
      image: localStorage.getItem("image")
        ? localStorage.getItem("image")
        : Object.keys(iconsCatalog.image)[0],
      color: localStorage.getItem("color")
        ? localStorage.getItem("color")
        : Object.keys(iconsCatalog.color)[0],
    },
    id: localStorage.getItem("id") ? localStorage.getItem("id") : null,
    name: localStorage.getItem("name")
      ? localStorage.getItem("name")
      : "anonymous user",
    snsUrl: localStorage.getItem("snsUrl")
      ? localStorage.getItem("snsUrl")
      : "",
    language: localStorage.getItem("language")
      ? localStorage.getItem("language")
      : languagesCatalog[0],
  });

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setUserSettings({
        ...userSettings,
        id: user.uid,
      });
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return (
    <UserSettingsContext.Provider value={{ userSettings, setUserSettings }}>
      {children}
    </UserSettingsContext.Provider>
  );
};
