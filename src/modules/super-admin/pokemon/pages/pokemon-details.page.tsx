import usePageData from '@/shared/hooks/use-page-data.hook';

import { useReactQuery } from '@/shared/hooks/use-react-query.hook';

import { apiGetPokemonDetails } from '../api/pokemon.api';

import { useParams } from 'react-router';

import { queryKeys } from '@/shared/constants/query-keys.constant';

import AnimationPage from '@/shared/components/animations/animation-page';

import WithLoading from '@/shared/components/with-loading';

import { Card, CardContent, CardHeader } from '@/shared/components/ui/card';

import { formatStatName, formatToThreeDigits, getTypeColor } from '../utils/pokemon.utils';

import { ButtonLink } from '@/shared/components/ui/button-link';

import { ArrowLeftIcon, RulerIcon, WeightIcon } from 'lucide-react';

import EmptyState from '@/shared/components/empty-state';

import { Progress } from '@/shared/components/ui/progress';

import { Badge } from '@/shared/components/ui/badge';

const PokemonDetailsPage = () => {
  usePageData({ title: 'Pokemon Details' });

  const idParam = useParams()?.id;

  const { data, isLoading } = useReactQuery({
    queryFn: () => apiGetPokemonDetails(idParam as string),
    queryKey: [queryKeys.pokemon.details, { id: idParam }],
    options: {
      enabled: !!idParam,
    },
  });

  const pokemon = data?.data;

  return (
    <AnimationPage>
      <WithLoading isLoading={isLoading}>
        <ButtonLink to='..' variant='outline' className='mb-1.25rem'>
          <ArrowLeftIcon />
          Back to list
        </ButtonLink>
        <Card className='pb-1.25rem rounded-md pt-0'>
          {!pokemon ? (
            <EmptyState message='No data found' />
          ) : (
            <>
              <CardHeader className='py-1.25rem bg-gradient-pokemon rounded-se-md rounded-ss-md text-center text-white'>
                <h1 className='text-2xl font-bold capitalize'>{pokemon?.name}</h1>
                <h6 className='text-muted'>#{formatToThreeDigits(pokemon?.id as number)}</h6>
              </CardHeader>
              <CardContent className='pt-1.25rem'>
                <div className='gap-2rem grid md:grid-cols-2'>
                  {/* img  */}
                  <div className='gap-1.25rem flex flex-col items-center justify-center'>
                    <div className='bg-muted aspect-square max-w-[400px] rounded-full'>
                      <img
                        src={pokemon.sprites.other['official-artwork'].front_default}
                        alt={pokemon.name}
                      />
                    </div>

                    <ul className='gap-0.5rem flex items-center'>
                      {pokemon.types.map(({ type }) => (
                        <li key={type.name}>
                          {/* @ts-expect-error fix ts later */}
                          <Badge className={`${getTypeColor(type.name)} capitalize text-white`}>
                            {type.name}
                          </Badge>
                        </li>
                      ))}
                    </ul>

                    <ul className='gap-1.25rem flex w-full'>
                      <li className='bg-muted py-1rem gap-0.75rem flex flex-1 flex-col items-center justify-between rounded-md'>
                        <h6 className='gap-0.5rem text-muted-foreground flex items-center font-medium'>
                          <RulerIcon size={14} /> Height
                        </h6>
                        <h5 className='text-xl font-bold'>{pokemon.height / 10} m</h5>
                      </li>
                      <li className='bg-muted py-1rem gap-0.75rem flex flex-1 flex-col items-center justify-between rounded-md'>
                        <h6 className='gap-0.5rem text-muted-foreground flex items-center font-medium'>
                          <WeightIcon size={14} /> Weight
                        </h6>
                        <h5 className='text-xl font-bold'>{pokemon.weight / 10} kg</h5>
                      </li>
                    </ul>
                  </div>
                  <div className='flex-1'>
                    <h2 className='mb-1.25rem text-xl font-bold'>Base Stats</h2>
                    <ul className='gap-1rem flex flex-col'>
                      {pokemon.stats.map(({ base_stat, stat }) => (
                        <li key={stat.name}>
                          <div className='mb-0.25rem flex items-center justify-between'>
                            <span className='font-medium capitalize'>
                              {formatStatName(stat.name)}
                            </span>
                            <span className='text-lg'>{base_stat}</span>
                          </div>
                          <Progress value={(base_stat / 255) * 100} className='h-2' />
                        </li>
                      ))}
                    </ul>
                    <h2 className='my-1.25rem text-xl font-bold'>Abilities</h2>
                    <ul className='gap-0.5rem flex flex-col'>
                      {pokemon.abilities.map(({ ability, is_hidden }) => (
                        <li key={ability.name}>
                          <Badge variant={is_hidden ? 'secondary' : 'outline'}>
                            {ability.name.replace('-', ' ')}
                          </Badge>
                          {is_hidden && (
                            <span className='ms-0.5rem text-muted-foreground text-xs'>
                              (Hidden)
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                    <h2 className='my-1.25rem text-xl font-bold'>Base Experience</h2>
                    <h2 className='text-xl font-bold'>{pokemon.base_experience} XP</h2>
                  </div>
                </div>
              </CardContent>
            </>
          )}
        </Card>
      </WithLoading>
    </AnimationPage>
  );
};

export default PokemonDetailsPage;
