import { createContext, useState, useEffect } from "react";
import { db_slang } from "../../firebase/slang_config";
import { ref, child, get } from 'firebase/database';

export const JapaneseSlangContext=createContext({});

export const JapaneseSlangProvider=props=>{
    const {children}=props;

    // スラングのセットを定義
    const [japaneseSlang, setJapaneseSlang] = useState({
        Japanese:{},
      });

    useEffect(()=>{
        const ref_slang = ref(db_slang)
        get(child(ref_slang, `Japanese`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                // console.log(snapshot.val());
                setJapaneseSlang({
                    ...japaneseSlang,
                    Japanese:snapshot.val()
                });
            } else {
                console.log("No data available");
            }
        })
    },[]);
    
    return (
        <JapaneseSlangContext.Provider value={{japaneseSlang, setJapaneseSlang}}>
            {children}
        </JapaneseSlangContext.Provider>
    );
};