import { createContext } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGhost,faOtter,faHippo,faDog,faPaw,faCat,faCow,faFish,faDragon,faKiwiBird,faHorse,faFrog,faRocket,faSnowman,faFootball,faBaseball,faBasketball } from '@fortawesome/free-solid-svg-icons';

export const IconsCatalogContext=createContext({});

export const IconsCatalogProvider= props =>{
    library.add(faGhost,faOtter,faHippo,faDog,faPaw,faCat,faCow,faFish,faDragon,faKiwiBird,faHorse,faFrog,faRocket,faSnowman,faFootball,faBaseball,faBasketball);

    // アイコンのデザインセットを定義
    // 翻訳も定義すること！！（../glabalParts/TranslateIconCatalog.ls）
    const iconsSVGCatalog={
        Ghost:{fontAwesomeValue:"fa-ghost"},
        Otter:{fontAwesomeValue:"fa-otter"},
        Hippo:{fontAwesomeValue:"fa-hippo"},
        Dog:{fontAwesomeValue:"fa-dog"},
        Paw:{fontAwesomeValue:"fa-paw"},
        Cat:{fontAwesomeValue:"fa-cat"},
        Cow:{fontAwesomeValue:"fa-cow"},
        Fish:{fontAwesomeValue:"fa-fish"},
        Dragon:{fontAwesomeValue:"fa-dragon"},
        KiwiBird:{fontAwesomeValue:"fa-kiwi-bird"},
        Horse:{fontAwesomeValue:"fa-horse"},
        Frog:{fontAwesomeValue:"fa-frog"},
        Snowman:{fontAwesomeValue:"fa-snowman"},
        Football:{fontAwesomeValue:"fa-football"},
        Baseball:{fontAwesomeValue:"fa-baseball"},
        Basketball:{fontAwesomeValue:"fa-basketball"}       
    }
    const iconsColorCatalog={
        Black:{tailwindClass:"text-balack"},
        Red:{tailwindClass:"text-red-600"},
        Yellow:{tailwindClass:"text-yellow-300"},
        Orange:{tailwindClass:"text-yellow-500"},
        Brown:{tailwindClass:"text-yellow-800"},
        Green:{tailwindClass:"text-green-600"},
        Blue:{tailwindClass:"text-blue-600"},
        Indigo:{tailwindClass:"text-indigo-500"},
        Purple:{tailwindClass:"text-purple-400"},
        Pink:{tailwindClass:"text-pink-400"}
    }

    const iconsCatalog={
        image:iconsSVGCatalog,
        color:iconsColorCatalog
    }

    const {children}=props;

    return (
        <IconsCatalogContext.Provider value={iconsCatalog}>
            {children}
        </IconsCatalogContext.Provider>
    )
}