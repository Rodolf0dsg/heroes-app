import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadCrums } from '../../../components/ui/custom/CustomBreadCrums';

export const SearchPage = () => {
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
    </>
  )
}

export default SearchPage;