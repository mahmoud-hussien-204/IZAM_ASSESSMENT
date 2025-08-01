import { useSearchParams } from 'react-router';

import { EnumPokemonTabFilter } from '../enums/pokemon.enum';

const usePokemonFilter = () => {
  const [searchParams] = useSearchParams();

  const isPokemonInfinityScrollTab =
    searchParams.get('tab') === EnumPokemonTabFilter.INFINITE_SCROLL;

  return { isPokemonInfinityScrollTab };
};

export default usePokemonFilter;
