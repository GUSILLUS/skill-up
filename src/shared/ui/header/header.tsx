import { AppBar } from '@mui/material';

import { navItems } from '@/shared/services/helpers/navigationItems';

import { Navigation } from './ui/navigation';

export const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Navigation navItems={navItems} />
    </AppBar>
  );
};
