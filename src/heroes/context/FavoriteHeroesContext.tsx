import { createContext, useEffect, useState, type PropsWithChildren } from "react"
import type { Hero } from "../types/hero.interface";

interface FavoriteHeroContext {
    //state
    favorites: Hero[]
    favoriteCount: number

    //methods
    toggleFavorite: ( hero: Hero ) => void
    isFavorite: ( hero: Hero ) => boolean
}

export const FavoriteHeroContext = createContext<FavoriteHeroContext>({} as FavoriteHeroContext);

const getFavoritesFromLocalStorage = () => {
    const favorites = localStorage.getItem('favorites');

    return favorites ? JSON.parse( favorites ) : [];
}


export const FavoriteHeroesProvider = ({ children }: PropsWithChildren) => {

    const [ favorites, setFavorites ] = useState<Hero[]>( getFavoritesFromLocalStorage() );

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify( favorites ))
    }, [ favorites ]);

    const toggleFavorite = ( hero: Hero ) => {
        const heroExist = favorites.find( h => h.id === hero.id );

        if ( heroExist ){
            const newFavorites = favorites.filter((h) => h.id !== hero.id );
            setFavorites( newFavorites );
            return;
        }

        setFavorites([...favorites, hero ]);
        console.log( favorites )
    }

    const isFavorite = ( hero: Hero ) => {
        return favorites.some( (h: Hero) => h.id === hero.id)
    }


  return (
    <FavoriteHeroContext value={{
        favorites: favorites,
        favoriteCount: favorites.length,

        toggleFavorite: toggleFavorite,
        isFavorite: isFavorite,
    }}>
        { children }
    </FavoriteHeroContext>
  )
}
