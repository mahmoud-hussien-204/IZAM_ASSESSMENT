import { interceptor } from '@/shared/api/interceptor.api';

import { toQueryString } from '@/shared/utils/url.utils';

import type {
  IPokemon,
  IPokemonApiSearchParams,
  IPokemonDetail,
} from '../interfaces/pokemon.interface';

export function apiGetPokemonList(searchQueryParams: IPokemonApiSearchParams) {
  const searchParams = toQueryString(searchQueryParams);
  return interceptor<IPokemon[]>({
    endpoint: `pokemon?${searchParams}`,
  });
}

export function apiGetPokemonDetails(id: string) {
  return interceptor<IPokemonDetail>({
    endpoint: `pokemon/${id}`,
  });
}
