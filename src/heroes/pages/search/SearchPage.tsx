import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadCrums } from '../../../components/ui/custom/CustomBreadCrums';
import { useQuery } from "@tanstack/react-query";
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action";
import { useSearchParams } from "react-router";
import type { Hero } from '../../types/hero.interface';
import { HeroGrid } from "@/heroes/components/HeroGrid";

export const SearchPage = () => {

  const [ searchParams ] = useSearchParams();
  const name = searchParams.get('name') ?? undefined;
  const strength = searchParams.get('strength') ?? undefined;

  const { data: heroes = [], isLoading, isFetchedAfterMount } = useQuery<Hero[]>({
    queryKey: ['search', { name, strength }],
    queryFn: () => searchHeroesAction({name, strength}),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      <CustomJumbotron
        title="Busqueda de superheroes"
        description="Descubre, explora y administra superheroes y villanos"
      />

      <CustomBreadCrums 
        currentPage="Search"
        breadCrums={[
          // { label: 'Home', to: '/' },
        ]}
      />

      <HeroStats />

      <SearchControls />

      {
        isLoading && <div>Loading ...</div>
      }

      {
        ( heroes?.length === 0 ) && isFetchedAfterMount
          ? <div>Not hero found</div>
          : <HeroGrid heroes={ heroes }/>
      }
          
    </>
  )
}

export default SearchPage;