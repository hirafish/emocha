import { useContext } from "react";
import  { JapaneseCheckSlangs, EnglishCheckSlangs } from "./CheckSlangs";
import { UserSettingsContext } from "../../providers/UserSettingsProvider";

// スラングの情報を取得
const GetSlangsList=(message)=>{
    const {userSettings}=useContext(UserSettingsContext);
    const userLanguage=userSettings.language;
    // firebaseを参照してスラングが含まれてないときは空配列を返す
    let slangsList = [];
    const postData=message;    

    if (userLanguage==="English"){
        slangsList=JapaneseCheckSlangs(message);

    }else{
        slangsList=EnglishCheckSlangs(message);
    }    
    return slangsList;
};

export { GetSlangsList };