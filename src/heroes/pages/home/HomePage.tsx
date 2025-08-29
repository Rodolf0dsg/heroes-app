import {
  Heart,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/ui/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useState } from "react"
import { CustomPagination } from "@/components/ui/custom/CustomPagination";
import { CustomBreadCrums } from "@/components/ui/custom/CustomBreadCrums";

export const HomePage = () => {

  const [ activeTab, setActiveTab ] = useState<
  'all' | 'favorites' | 'heroes' | 'villains'
  >('all')

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron 
          title="Universo de superheroes"
          description="Descubre, explora y administra superheroes y villanos"
        />

        <CustomBreadCrums currentPage="Heroes"/>

        {/* Stats Dashboard */}
        <HeroStats/>    

        {/* Tabs */}
        <Tabs value={ activeTab } className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger 
              value="all"
              onClick={() => setActiveTab('all') }
            >
              All Characters (16)
            </TabsTrigger>

            <TabsTrigger 
              value="favorites" 
              className="flex items-center gap-2"
              onClick={ () => setActiveTab('favorites')}
            >
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>

            <TabsTrigger 
              value="heroes"
              onClick={ () => setActiveTab('heroes') }
            >
              Heroes (12)
            </TabsTrigger>

            <TabsTrigger 
              value="villains"
              onClick={() => setActiveTab('villains') }
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <h1>Todos los personajes</h1>
          </TabsContent>

           <TabsContent value="favorites">
            <h1>Todos los personajes</h1>
          </TabsContent>

          <TabsContent value="heroes">
            <h1>Heroes</h1>
          </TabsContent>

          <TabsContent value="villains">
            <h1>Villanos</h1>
          </TabsContent>
        </Tabs>

        {/* Character Grid */}
        <HeroGrid/>

        {/* Pagination */}
        <CustomPagination totalPages={ 8 }/>
      </>
    </>
  )
}
