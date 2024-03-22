import { useContext } from "react"
import { JapaneseSlangContext } from "../../providers/JapaneseSlangProvider"
import { EnglishSlangContext } from "../../providers/EnglishSlangProvider"




//Englishユーザーの時に使う
const JapaneseCheckSlangs = (postData) => {
    const { japaneseSlang } = useContext( JapaneseSlangContext );
    let slangList = [];
    let uniqueSlangList = [];

    for (let i = 0; i < postData.length; i++) {
        let slangObject = {};
        let slangFlag = false;

        if (Object.keys(japaneseSlang.Japanese).includes(postData[i])) {
            slangFlag = true;
            slangObject.shortcodes = postData[i];
            slangObject.meaning = japaneseSlang.Japanese[postData[i]].meaning;
            slangObject.isbad = japaneseSlang.Japanese[postData[i]].isbad;

        }else if(postData[i].includes("skin-tone")){
            let word = postData[i].substring(0, 11);
            console.log(word);
            if (Object.keys(japaneseSlang.Japanese).includes(word)) {
                slangFlag = true;
                slangObject.shortcodes = word;
                slangObject.meaning = japaneseSlang.Japanese[word].meaning;
                slangObject.isbad = japaneseSlang.Japanese[word].isbad;
            }            
        }

        if (slangFlag){
            if (!uniqueSlangList.includes(slangObject.shortcodes)){
                uniqueSlangList.push(slangObject.shortcodes);
                slangList.push(slangObject);
            }
            slangFlag = false;
        }  
        
    }

    return slangList;

}

//Japaneseユーザーの時に使う
const EnglishCheckSlangs = (postData) => {

    const { EnglishSlang } = useContext( EnglishSlangContext );
    let slangList = [];
    let uniqueSlangList = [];

    for (let i = 0; i < postData.length; i++) {
        let slangObject = {};
        let slangFlag = false;

        if (Object.keys(EnglishSlang.English).includes(postData[i])) {
            slangFlag = true;
            slangObject.shortcodes = postData[i];
            slangObject.meaning = EnglishSlang.English[postData[i]].meaning;
            slangObject.isbad = EnglishSlang.English[postData[i]].isbad;

        }else if(postData[i].includes("skin-tone")){
            let word = postData[i].substring(0, 11);
            console.log(word);
            if (Object.keys(EnglishSlang.English).includes(word)) {
                slangFlag = true;
                slangObject.shortcodes = word;
                slangObject.meaning = EnglishSlang.English[word].meaning;
                slangObject.isbad = EnglishSlang.English[word].isbad;
            }            
        }


        if (slangFlag){
            if (!uniqueSlangList.includes(slangObject.shortcodes)){
                uniqueSlangList.push(slangObject.shortcodes);
                slangList.push(slangObject);
            }
            slangFlag = false;
        }       
    }
    return slangList;

}

export { JapaneseCheckSlangs, EnglishCheckSlangs };