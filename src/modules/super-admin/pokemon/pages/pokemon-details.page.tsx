import usePageData from '@/shared/hooks/use-page-data.hook';

const PokemonDetailsPage = () => {
  usePageData({ title: 'Pokemon Details' });
  return <div>PokemonDetailsPage</div>;
};

export default PokemonDetailsPage;
