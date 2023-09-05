import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import { Button, List, Toolbar } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';

import { NavItem } from '@/shared/types/navItem';

type Props = {
  navItems: NavItem[];
};

export const Navigation = ({ navItems }: Props) => {
  const session = useSession();

  const router = useRouter();

  return (
    <div className="md:block hidden">
      <Toolbar className="flex gap-3 justify-between">
        <ArrowCircleUpSharpIcon fontSize="large" />
        <List className="flex gap-2">
          {navItems.map(({ label, href }) => (
            <Link href={href} key={label}>
              <Button
                fullWidth={false}
                size="small"
                variant="contained"
                color="info"
                disabled={router.pathname === href}
              >
                {label}
              </Button>
            </Link>
          ))}

          {session.data && (
            <Link href="/profile">
              <Button
                fullWidth={false}
                size="small"
                variant="contained"
                color="info"
                disabled={router.pathname === '/profile'}
              >
                Profile
              </Button>
            </Link>
          )}
        </List>

        <Button
          fullWidth={false}
          size="small"
          variant="contained"
          color="info"
          onClick={() => (session?.data ? signOut({ callbackUrl: '/' }) : signIn())}
        >
          {session?.data ? 'Sign Out' : 'Sign In'}
        </Button>
      </Toolbar>
    </div>
  );
};
