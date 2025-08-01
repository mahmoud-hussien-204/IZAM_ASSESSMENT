import { Skeleton } from '@/shared/components/ui/skeleton';

interface IProps extends Required<React.PropsWithChildren> {
  isLoading: boolean;
  limit: number;
}

const PokemonWithLoading = ({ isLoading, children, limit }: IProps) => {
  return isLoading
    ? Array.from({ length: limit }, (_, index) => <SkeletonCard key={index} />)
    : children;
};

export default PokemonWithLoading;

export function SkeletonCard() {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='h-[200px] rounded-xl' />
      <div className='space-y-2'>
        <Skeleton className='mx-auto h-4 w-[150px]' />
        <Skeleton className='mx-auto h-4 w-[100px]' />
      </div>
    </div>
  );
}
