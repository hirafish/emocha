const TranslateIconCatalog=(originIconValue)=>{
    const iconImages={
        Ghost:{ja:"ゴースト"},
        Otter:{ja:"カワウソ"},
        Hippo:{ja:"カバ"},
        Dog:{ja:"いぬ"},
        Paw:{ja:"にくきゅう"},
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
        Basketball:{ja:"バスケットボール"},
        Astronaut:{ja:"宇宙飛行士"},
        Meteor:{ja:"メテオ"},
        IceCream:{ja:"アイス"},
        ChessKing:{ja:"チェスキング"},
        ChessKnight:{ja:"チェスナイト"},
        ChessQueen:{ja:"チェスクイーン"},
        Star:{ja:"スター"},
        Heart:{ja:"ハート"},
        Poo:{ja:"うんち"}
    }
    const iconsColors={
        Black:{ja:"ブラック"},
        Gray:{ja:"グレー"},
        Red:{ja:"レッド"},
        Yellow:{ja:"イエロー"},
        Orange:{ja:"オレンジ"},
        Amber:{ja:"こはく"},
        Brown:{ja:"ブラウン"},
        Lime:{ja:"ライム"},
        Emerald:{ja:"エメラルド"},
        Teal:{ja:"ティール"},
        Green:{ja:"グリーン"},
        Cyan:{ja:"シアン"},
        Sky:{ja:"スカイ"},
        Blue:{ja:"ブルー"},
        Indigo:{ja:"あいいろ"},
        Purple:{ja:"パープル"},
        Fuchsia:{ja:"フクシャ"},
        Pink:{ja:"ピンク"},
        Rose:{ja:"ローズ"},
        Violet:{ja:"すみれ"}
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