import Container from '@/shared/components/container';

import { ButtonLink } from '@/shared/components/ui/button-link';

const NotFoundLayout = () => {
  return (
    <Container>
      <div className='flex h-screen flex-col items-center justify-center'>
        <p className='text-primary mb-4 text-sm font-semibold uppercase md:text-base'>
          That’s a 404
        </p>
        <h1 className='mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl'>
          Page not found
        </h1>

        <p className='mb-12 max-w-screen-md text-center text-gray-500 md:text-lg'>
          The page you’re looking for doesn’t exist.
        </p>

        <ButtonLink to='/'>Go Home</ButtonLink>
      </div>
    </Container>
  );
};

export default NotFoundLayout;
