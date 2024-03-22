import { JapaneseSlangContext } from "../../providers/JapaneseSlangProvider"
import { EnglishSlangContext } from "../../providers/EnglishSlangProvider"
import { useContext } from "react"

const postData = [
    ":nail_care:",
    ":avocado:",
    ":jack_o_lantern:",
]

//Englishユーザーの時に使う
const JapaneseCheckSlangs = () => {
    const { japaneseSlang } = useContext( JapaneseSlangContext );
    var slangList = [];

    for (let i = 0; i < postData.length; i++) {
        var slangObject = {};
        var slangFlag = false;

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
        return slangList;
        
    }

}

//Japaneseユーザーの時に使う
const EnglishCheckSlangs = () => {

    const { EnglishSlang } = useContext( EnglishSlangContext );
    var slangList = [];

    for (let i = 0; i < postData.length; i++) {
        var slangObject = {};
        var slangFlag = false;

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
        return slangList;
        
    }


}

export { JapaneseCheckSlangs, EnglishCheckSlangs };