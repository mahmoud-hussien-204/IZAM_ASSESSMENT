import { Link } from 'react-router';

import type { IPokemon } from '../interfaces/pokemon.interface';

import { formatToThreeDigits } from '../utils/pokemon.utils';

interface IProps {
  data: IPokemon;
}

const PokemonCard = ({ data }: IProps) => {
  return (
    <Link to={`${data.id}`} className='bg-muted p-1.25rem rounded-md text-center'>
      <div className='mb-1.25rem flex items-center justify-center'>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
          alt={data.name}
          width={100}
          height={100}
          loading='lazy'
          className='object-contain'
        />
      </div>
      <h3 className='text-lg font-bold capitalize'>{data.name}</h3>
      <p className='text-muted-foreground'>{formatToThreeDigits(data.id)}</p>
    </Link>
  );
};

export default PokemonCard;
