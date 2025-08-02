import { apiGetPokemonList } from '../api/pokemon.api';

import useURLFilters from '@/shared/hooks/use-url-filters.hook';

import { useCallback, useMemo } from 'react';

import { extractPokemonId } from '../utils/pokemon.utils';

import PokemonWithLoading from './pokemon-with-loading';

import PokemonCard from './pokemon-card';

import { useInfiniteQuery } from '@tanstack/react-query';

import { queryKeys } from '@/shared/constants/query-keys.constant';

import { Button } from '@/shared/components/ui/button';

const PokemonListInfinityScroll = () => {
  const { sizeSearchParams } = useURLFilters();

  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, refetch } =
    useInfiniteQuery({
      queryKey: [queryKeys.pokemon.infinityScrollList, { limit: +sizeSearchParams }],
      queryFn: ({ pageParam = 0 }) =>
        apiGetPokemonList({ limit: +sizeSearchParams, offset: pageParam }),
      initialPageParam: 0,
      getNextPageParam: (lastPage, pages) => {
        return lastPage.meta?.next ? pages.length * +sizeSearchParams : undefined;
      },
    });

  const pokemonList = useMemo(
    () =>
      (data?.pages || []).flatMap((page) =>
        page.data.map((pokemon) => ({
          ...pokemon,
          id: extractPokemonId(pokemon.url),
        }))
      ),
    [data?.pages]
  );

  const totalCount = data?.pages[0]?.meta?.count || 0;

  const handleLoadMore = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  return (
    <div>
      <div className='gap-1.25rem grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        <PokemonWithLoading isLoading={isLoading} limit={+sizeSearchParams}>
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} data={pokemon} />
          ))}
        </PokemonWithLoading>
      </div>

      {hasNextPage && (
        <div className='flex flex-col items-center gap-4 border-t pt-4'>
          <Button onClick={handleLoadMore} isLoading={isFetchingNextPage}>
            Load More Pokémon
          </Button>

          <p className='text-muted-foreground text-sm'>
            Showing {pokemonList.length} of {totalCount} Pokémon
          </p>
        </div>
      )}

      {!hasNextPage && pokemonList.length > 0 && (
        <div className='py-8 text-center'>
          <p className='text-muted-foreground'>You've caught them all! ({totalCount} Pokémon)</p>
        </div>
      )}
    </div>
  );
};

export default PokemonListInfinityScroll;
