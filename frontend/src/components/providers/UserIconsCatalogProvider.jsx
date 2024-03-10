import { Children, createContext } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGhost,faOtter,faHippo,faDog,faPaw,faCat,faCow,faFish,faDragon,faKiwiBird,faHorse,faFrog,faRocket,faSnowman,faFootball,faBaseball,faBasketball } from '@fortawesome/free-solid-svg-icons';

export const UserIconsCatalogContext=createContext({});

export const UserIconsCatalogProvider= props =>{
    library.add(faGhost,faOtter,faHippo,faDog,faPaw,faCat,faCow,faFish,faDragon,faKiwiBird,faHorse,faFrog,faRocket,faSnowman,faFootball,faBaseball,faBasketball);
    
    const UserIconsSVGCatalog={
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
        Rocket:{fontAwesomeValue:"fa-rocket"},
        Snowman:{fontAwesomeValue:"fa-snowman"},
        Football:{fontAwesomeValue:"fa-football"},
        Baseball:{fontAwesomeValue:"fa-baseball"},
        Basketball:{fontAwesomeValue:"fa-basketball"}       
    }

    const UserIconsColorCatalog={
        Black:{tailwindClass:"text-balack"},
        Gray:{tailwindClass:"text-gray-900"},
        Red:{tailwindClass:"text-red-600"},
        Yellow:{tailwindClass:"text-yellow-400"},
        Orange:{tailwindClass:"text-yellow-500"},
        Brown:{tailwindClass:"text-yellow-800"},
        Green:{tailwindClass:"text-green-600"},
        Blue:{tailwindClass:"text-blue-600"},
        Indigo:{tailwindClass:"text-indigo-500"},
        Purple:{tailwindClass:"text-purple-400"},
        Pink:{tailwindClass:"text-pink-400"}
    }

    const UserIconsCatalog={
        icon:UserIconsSVGCatalog,
        color:UserIconsColorCatalog
    }

    const {children}=props;

    return (
        <UserIconsCatalogContext.Provider value={UserIconsCatalog}>
            {children}
        </UserIconsCatalogContext.Provider>
    )
}