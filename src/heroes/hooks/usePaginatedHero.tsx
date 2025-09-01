import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";

interface Props {
    page: number
    limit: number
    category: string
}

export const usePaginatedHero = ({page, limit, category = 'all'}: Props) => {
    return useQuery({
    queryKey: ['heroes', category, {page, limit, category}],
    queryFn: () => getHeroesByPageAction(+page, +limit, category),
    staleTime: 1000 * 60 * 5,
  });
}
