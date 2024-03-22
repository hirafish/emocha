import { useContext } from "react"
import { JapaneseSlangContext } from "../../providers/JapaneseSlangProvider"
import { EnglishSlangContext } from "../../providers/EnglishSlangProvider"




//Englishユーザーの時に使う
const JapaneseCheckSlangs = (postData) => {
    const { japaneseSlang } = useContext( JapaneseSlangContext );
    let slangList = [];

    for (let i = 0; i < postData.length; i++) {
        let slangObject = {};
        let slangFlag = false;

        if (Object.keys(japaneseSlang.Japanese).includes(postData[i])) {
            slangFlag = true;
            slangObject.shortcodes = postData[i];
            slangObject.meaning = japaneseSlang.Japanese[postData[i]].meaning;
            slangObject.isbad = japaneseSlang.Japanese[postData[i]].isbad;

        }
        if (slangFlag){
            slangList.push(slangObject);
            slangFlag = false;
        }  
        
    }

    return slangList;

}

//Japaneseユーザーの時に使う
const EnglishCheckSlangs = (postData) => {

    const { EnglishSlang } = useContext( EnglishSlangContext );
    let slangList = [];

    for (let i = 0; i < postData.length; i++) {
        let slangObject = {};
        let slangFlag = false;

        if (Object.keys(EnglishSlang.English).includes(postData[i])) {
            slangFlag = true;
            slangObject.shortcodes = postData[i];
            slangObject.meaning = EnglishSlang.English[postData[i]].meaning;
            slangObject.isbad = EnglishSlang.English[postData[i]].isbad;

        }
        if (slangFlag){
            slangList.push(slangObject);
            slangFlag = false;
        }        
    }
    return slangList;

}

export { JapaneseCheckSlangs, EnglishCheckSlangs };