import type { RouteObject } from 'react-router';

const usersRoutes: RouteObject[] = [
  {
    path: 'pokemon',
    children: [
{
  index: true,
   lazy: async () => ({
      Component: (await import('./pages/pokemon-list.page')).default,
    }),
},
{
  path: ':id',
   lazy: async () => ({
      Component: (await import('./pages/pokemon-details.page')).default,
    }),
}
    ]
   
  },
];

export default usersRoutes;
