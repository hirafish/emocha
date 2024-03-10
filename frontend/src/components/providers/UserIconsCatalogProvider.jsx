import { Children, createContext } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGhost,faOtter,faHippo,faDog,faPaw,faCat,faCow,faFish,faDragon,faKiwiBird,faHorse,faFrog,faRocket,faSnowman,faFootball,faBaseball,faBasketball } from '@fortawesome/free-solid-svg-icons';

export const UserIconsCatalogContext=createContext({});

export const UserIconsCatalogProvider= props =>{
    library.add(faGhost,faOtter,faHippo,faDog,faPaw,faCat,faCow,faFish,faDragon,faKiwiBird,faHorse,faFrog,faRocket,faSnowman,faFootball,faBaseball,faBasketball);
    const UserIconsCatalog={
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
    const {children}=props;

    return (
        <UserIconsCatalogContext.Provider value={UserIconsCatalog}>
            {children}
        </UserIconsCatalogContext.Provider>
    )
}