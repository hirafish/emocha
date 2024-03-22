import { createContext } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGhost,faOtter,faHippo,faDog,faPaw,faCat,faCow,faFish,faDragon,faKiwiBird,faHorse,faFrog,faRocket,faSnowman,faFootball,faBaseball,faBasketball, faUserAstronaut, faMeteor, faIceCream, faChessKing, faStar, faHeart, faPoo, faChessKnight, faChessQueen } from '@fortawesome/free-solid-svg-icons';

export const IconsCatalogContext=createContext({});

export const IconsCatalogProvider= props =>{
    library.add(faGhost,faOtter,faHippo,faDog,faPaw,faCat,faCow,faFish,faDragon,faKiwiBird,faHorse,faFrog,faRocket,faSnowman,faFootball,faBaseball,faBasketball,faUserAstronaut,faMeteor,faIceCream,faChessKing,faChessKnight,faChessQueen,faStar,faHeart,faPoo);

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
        Basketball:{fontAwesomeValue:"fa-basketball"},
        Astronaut:{fontAwesomeValue:"fa-user-astronaut"},
        Meteor:{fontAwesomeValue:"fa-meteor"},
        IceCream:{fontAwesomeValue:"fa-ice-cream"},
        ChessKing:{fontAwesomeValue:"fa-chess-king"},
        ChessKnight:{fontAwesomeValue:"fa-chess-knight"},
        ChessQueen:{fontAwesomeValue:"fa-chess-queen"},
        Star:{fontAwesomeValue:"fa-star"},
        Heart:{fontAwesomeValue:"fa-heart"},
        Poo:{fontAwesomeValue:"fa-poo"}
    }
    const iconsColorCatalog={
        Black:{tailwindClass:"text-balack"},
        Gray:{tailwindClass:"text-gray-500"},
        Red:{tailwindClass:"text-red-500"},
        Brown:{tailwindClass:"text-yellow-800"},
        Orange:{tailwindClass:"text-yellow-500"},
        Amber:{tailwindClass:"text-amber-500"},
        Yellow:{tailwindClass:"text-yellow-500"},
        Lime:{tailwindClass:"text-lime-500"},
        Green:{tailwindClass:"text-green-500"},
        Emerald:{tailwindClass:"text-emerald-500"},
        Teal:{tailwindClass:"text-teal-500"},
        Cyan:{tailwindClass:"text-cyan-500"},
        Sky:{tailwindClass:"text-sky-500"},
        Blue:{tailwindClass:"text-blue-500"},
        Indigo:{tailwindClass:"text-indigo-500"},
        Violet:{tailwindClass:"text-violet-500"},
        Purple:{tailwindClass:"text-purple-500"},
        Fuchsia:{tailwindClass:"text-fuchsia-500"},
        Pink:{tailwindClass:"text-pink-500"},
        Rose:{tailwindClass:"text-rose-500"},
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