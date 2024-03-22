import { createContext, useState, useEffect } from "react";
import { db_slang } from "../../firebase/slang_config";
import { ref, child, get } from 'firebase/database';

export const EnglishSlangContext=createContext({});

export const EnglishSlangProvider=props=>{
    const {children}=props;

    // スラングのセットを定義
    const [englishSlang, setEnglishSlang] = useState({
        English:{},
      });

    useEffect(()=>{
        const ref_slang = ref(db_slang)
        get(child(ref_slang, `English`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                // console.log(snapshot.val());
                setEnglishSlang({
                    ...englishSlang,
                    English:snapshot.val()
                });
            } else {
                console.log("No data available");
            }
        })
    },[]);
    
    return (
        <EnglishSlangContext.Provider value={{englishSlang, setEnglishSlang}}>
            {children}
        </EnglishSlangContext.Provider>
    );
};