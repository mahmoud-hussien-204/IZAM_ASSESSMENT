import usePageData from '@/shared/hooks/use-page-data.hook';

import AnimationPage from '@/shared/components/animations/animation-page';

import Filters from '../components/filters';

import PokemonListInfinityScroll from '../components/pokemon-list-infinity-scroll';

import PokemonListPageControl from '../components/pokemon-list-page-control';

import usePokemonFilter from '../hooks/use-pokemon-filter';

import { AnimatePresence } from 'framer-motion';

import { motion } from 'framer-motion';

const fadeVariant = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3 },
};

const UsersListPage = () => {
  usePageData({ title: 'Pokemon List' });

  const { isPokemonInfinityScrollTab } = usePokemonFilter();

  return (
    <AnimationPage>
      <Filters />
      <AnimatePresence mode='wait'>
        {isPokemonInfinityScrollTab ? (
          <motion.div key='infinity' {...fadeVariant}>
            <PokemonListInfinityScroll />
          </motion.div>
        ) : (
          <motion.div key='page-control' {...fadeVariant}>
            <PokemonListPageControl />
          </motion.div>
        )}
      </AnimatePresence>
    </AnimationPage>
  );
};

export default UsersListPage;
