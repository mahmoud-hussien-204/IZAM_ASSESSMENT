export type IPokemonApiSearchParams = {
  offset: number;
  limit: number;
};

export interface IPokemon {
  name: string;
  url: string;
  id: number;
}
