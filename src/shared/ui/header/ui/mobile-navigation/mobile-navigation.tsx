import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';

import { NavItem } from '@/shared/types/navItem';

type Props = {
  navItems: NavItem[];
};

export const MobileNavigation = ({ navItems }: Props) => {
  const session = useSession();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <div className="md:hidden flex justify-end items-center">
      <Toolbar>
        <Button color="inherit" onClick={() => toggleDrawer(true)}>
          <MenuIcon />
        </Button>
      </Toolbar>

      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <List className="flex flex-col items-center gap-2">
          <ListItem onClick={() => toggleDrawer(false)} className="flex justify-center">
            <ArrowCircleUpSharpIcon fontSize="large" />
          </ListItem>
          <Divider />

          {navItems.map(({ label, href }) => (
            <ListItem key={label}>
              <Link href={href} className="w-full">
                <Button fullWidth size="medium" variant="contained" color="info" disabled={router.pathname === href}>
                  {label}
                </Button>
              </Link>
            </ListItem>
          ))}

          {session.data && (
            <ListItem>
              <Link href="/profile" className="w-full">
                <Button
                  fullWidth
                  size="medium"
                  variant="contained"
                  color="info"
                  disabled={router.pathname === '/profile'}
                >
                  Profile
                </Button>
              </Link>
            </ListItem>
          )}
        </List>
        <Divider />

        <ListItem>
          <Button
            fullWidth
            size="medium"
            variant="contained"
            color="info"
            onClick={() => (session?.data ? signOut({ callbackUrl: '/' }) : signIn())}
          >
            {session?.data ? 'Sign Out' : 'Sign In'}
          </Button>
        </ListItem>
      </SwipeableDrawer>
    </div>
  );
};
