import { RouterProvider } from "react-router"
import { router } from "./router/AppRouter"

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import { FavoriteHeroesProvider } from "./heroes/context/FavoriteHeroesContext";

const queryClient = new QueryClient();

export const HeroesApp = () => {
  return (
    <QueryClientProvider client={ queryClient } >
      <FavoriteHeroesProvider>
        <RouterProvider router={ router }/>

        <ReactQueryDevtools initialIsOpen={false} />
      </FavoriteHeroesProvider>
    </QueryClientProvider>
  )
}
