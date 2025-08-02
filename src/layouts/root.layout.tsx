import { Navigate, Outlet, useLocation } from 'react-router';

const RootLayout = () => {
  const pathname = useLocation().pathname;

  if (pathname == '/') return <Navigate to='/super-admin/pokemon' />;

  return (
    <main className='font-poppins'>
      <Outlet />
    </main>
  );
};

export default RootLayout;
