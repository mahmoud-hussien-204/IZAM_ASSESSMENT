import { Ban, Building2, Car, LayoutDashboard, Settings, Truck, Users } from 'lucide-react';

export const sidebarLinks = {
  'super-admin': [
    {
      title: 'Pokemon',
      url: 'pokemon',
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: 'Users Management',
      url: '#',
      icon: Users,
    },
    {
      title: 'Errors',
      url: '#',
      icon: Ban,
      items: [
        {
          title: 'Error 404',
          url: '#',
        },
        {
          title: 'Error 500',
          url: '#',
        },
      ],
    },
    {
      title: 'Vehicles',
      url: '#',
      icon: Car,
    },
    {
      title: 'Service Providers',
      url: '#',
      icon: Truck,
    },
    {
      title: 'Rental Agencies',
      url: '#',
      icon: Building2,
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings,
    },
  ],
};
