import { createContext } from "react";

export const LanguagesCatalogContext=createContext({});

export const LanguagesCatalogProvider=props=>{
    const {children}=props;

    // 言語設定のセットを定義
    const languagesCatalog=["English","日本語"];
    
        return (
            <LanguagesCatalogContext.Provider value={languagesCatalog}>
                {children}
            </LanguagesCatalogContext.Provider>
        );
};