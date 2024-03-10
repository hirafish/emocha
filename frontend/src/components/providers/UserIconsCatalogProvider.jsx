import { Children, createContext } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGhost,faOtter,faHippo,faDog,faPaw,faCat,faCow,faFish,faDragon,faKiwiBird,faHorse,faFrog,faRocket,faSnowman,faFootball,faBaseball,faBasketball } from '@fortawesome/free-solid-svg-icons';

export const UserIconsCatalogContext=createContext({});

export const UserIconsCatalogProvider= props =>{
    library.add(faGhost,faOtter,faHippo,faDog,faPaw,faCat,faCow,faFish,faDragon,faKiwiBird,faHorse,faFrog,faRocket,faSnowman,faFootball,faBaseball,faBasketball);
    
    const UserIconsSVGCatalog={
        Ghost:{awesomeFontValue:"fa-ghost"},
        Otter:{awesomeFontValue:"fa-otter"},
        Hippo:{awesomeFontValue:"fa-hippo"},
        Dog:{awesomeFontValue:"fa-dog"},
        Paw:{awesomeFontValue:"fa-paw"},
        Cat:{awesomeFontValue:"fa-cat"},
        Cow:{awesomeFontValue:"fa-cow"},
        Fish:{awesomeFontValue:"fa-fish"},
        Dragon:{awesomeFontValue:"fa-dragon"},
        KiwiBird:{awesomeFontValue:"fa-kiwi-bird"},
        Horse:{awesomeFontValue:"fa-horse"},
        Frog:{awesomeFontValue:"fa-frog"},
        Rocket:{awesomeFontValue:"fa-rocket"},
        Snowman:{awesomeFontValue:"fa-snowman"},
        Football:{awesomeFontValue:"fa-football"},
        Baseball:{awesomeFontValue:"fa-baseball"},
        Basketball:{awesomeFontValue:"fa-basketball"}       
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