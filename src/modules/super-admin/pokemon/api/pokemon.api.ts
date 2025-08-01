import { interceptor } from '@/shared/api/interceptor.api';

import { toQueryString } from '@/shared/utils/url.utils';

import type { IPokemon, IPokemonApiSearchParams } from '../interfaces/pokemon.interface';

import { safeCall } from '@/shared/api/safe-call.api';

export function apiGetPokemonList(searchQueryParams: IPokemonApiSearchParams) {
  const searchParams = toQueryString(searchQueryParams);
  return interceptor<IPokemon[]>({
    endpoint: `pokemon?${searchParams}`,
  });
}

export function apiGetPokemonDetails(id: string) {
  const isSafeCall = safeCall(id);
  if (!isSafeCall) return;
  return interceptor<IPokemon[]>({
    endpoint: `pokemon?${id}`,
  });
}
