const TranslateIconCatalog=(originIconValue)=>{
    const iconImages={
        Ghost:{ja:"ゴースト"},
        Otter:{ja:"カワウソ"},
        Hippo:{ja:"カバ"},
        Dog:{ja:"いぬ"},
        Paw:{ja:"肉球"},
        Cat:{ja:"ねこ"},
        Cow:{ja:"うし"},
        Fish:{ja:"フィッシュ"},
        Dragon:{ja:"ドラゴン"},
        KiwiBird:{ja:"キウイバード"},
        Horse:{ja:"うま"},
        Frog:{ja:"カエル"},
        Snowman:{ja:"雪だるま"},
        Football:{ja:"サッカーボール"},
        Baseball:{ja:"野球ボール"},
        Basketball:{ja:"バスケットボール"}       
    }
    const iconsColors={
        Black:{ja:"ブラック"},
        Red:{ja:"レッド"},
        Yellow:{ja:"イエロー"},
        Orange:{ja:"オレンジ"},
        Brown:{ja:"ブラウン"},
        Green:{ja:"グリーン"},
        Blue:{ja:"ブルー"},
        Indigo:{ja:"インディゴ"},
        Purple:{ja:"パークル"},
        Pink:{ja:"ピンク"}
    }
    let result=undefined;
    if(Object.keys(iconsColors).includes(originIconValue)){
        result=iconsColors[originIconValue].ja;
    }else{
        result=iconImages[originIconValue].ja;
    };
    return result;
};

export default TranslateIconCatalog;