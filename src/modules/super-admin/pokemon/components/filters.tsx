import { ActivityIcon } from 'lucide-react';

import usePokemonFilter from '../hooks/use-pokemon-filter';

import { ButtonLink } from '@/shared/components/ui/button-link';

import { EnumPokemonTabFilter } from '../enums/pokemon.enum';

const filters = () => {
  const { isPokemonInfinityScrollTab } = usePokemonFilter();

  return (
    <div className='mb-1.5rem gap-0.75rem flex flex-col items-center justify-center text-center'>
      <h1 className='gap-0.25rem flex items-center text-2xl font-bold'>
        <ActivityIcon />
        Pokédex
      </h1>
      <p className='text-lg'>Discover and explore Pokemon with infinite scroll</p>
      <div className='gap-0.5rem sm:gap-0.75rem flex items-center'>
        <ButtonLink
          to={`?tab=${EnumPokemonTabFilter.PAGE_CONTROL}`}
          variant={isPokemonInfinityScrollTab ? 'outline' : 'default'}
        >
          Page Control
        </ButtonLink>
        <ButtonLink
          to={`?tab=${EnumPokemonTabFilter.INFINITE_SCROLL}`}
          variant={isPokemonInfinityScrollTab ? 'default' : 'outline'}
        >
          Infinite Scroll
        </ButtonLink>
      </div>
    </div>
  );
};

export default filters;
