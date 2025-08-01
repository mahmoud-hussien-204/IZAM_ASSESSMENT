import { Link } from 'react-router';

import type { IPokemon } from '../interfaces/pokemon.interface';

import { formatToThreeDigits } from '../utils/pokemon.utils';

import { Card, CardContent } from '@/shared/components/ui/card';

interface IProps {
  data: IPokemon;
}

const PokemonCard = ({ data }: IProps) => {
  return (
    <Link to={`${data.id}`} className=' '>
      <Card className='bg-muted transition-all duration-300 hover:scale-105 hover:shadow-xl'>
        <CardContent className='p-4 text-center'>
          <div className='relative mb-3'>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
              alt={data.name}
              className='mx-auto h-24 w-24 object-contain'
              loading='lazy'
            />
          </div>

          <h3 className='text-lg font-bold capitalize'>{data.name}</h3>
          <p className='text-muted-foreground'>#{formatToThreeDigits(data.id)}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PokemonCard;
