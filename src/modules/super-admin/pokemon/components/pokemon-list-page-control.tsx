import { useReactQuery } from '@/shared/hooks/use-react-query.hook';

import { apiGetPokemonList } from '../api/pokemon.api';

import useURLFilters from '@/shared/hooks/use-url-filters.hook';

import { useMemo } from 'react';

import { extractPokemonId } from '../utils/pokemon.utils';

import PokemonWithLoading from './pokemon-with-loading';

import PokemonCard from './pokemon-card';

import { DynamicPagination } from '@/shared/components/dynamic-pagination';

const PokemonListPageControl = () => {
  const { sizeSearchParams, offset } = useURLFilters();

  const { data, isLoading } = useReactQuery({
    queryFn: () =>
      apiGetPokemonList({
        limit: +sizeSearchParams,
        offset: offset,
      }),
    queryKey: ['pokemon', { limit: +sizeSearchParams, offset: offset }],
  });

  const meta = data?.meta;

  const pokemonList = useMemo(
    () =>
      (data?.data || []).map((pokemon) => ({
        ...pokemon,
        id: extractPokemonId(pokemon.url),
      })),
    [data?.data]
  );

  return (
    <div>
      <div className='gap-1.25rem grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        <PokemonWithLoading isLoading={isLoading} limit={+sizeSearchParams}>
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} data={pokemon} />
          ))}
        </PokemonWithLoading>
      </div>
      <DynamicPagination totalPages={Math.ceil((meta?.count || 1) / +sizeSearchParams)} />
    </div>
  );
};

export default PokemonListPageControl;
