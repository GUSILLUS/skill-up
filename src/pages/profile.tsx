'use client';
import { CircularProgress, Typography, Paper, Avatar } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';

import { Layout } from '@/shared/ui/layout';

export default function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  console.log(session);

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  // Call loadImage when the file prop changes
  useEffect(() => {
    const takeImage = async () => {
      try {
        const server = await fetch(`/api/take-image/take-image?email=${session?.user?.email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (server.status === 200) {
          const response = await server.json();
          console.log(response.file);

          setImageUrl(response.file);
        }
      } catch (error) {
        console.error('Error taking image:', error);
      }
    };

    takeImage();
  }, [session?.user?.email]);

  return (
    <Layout>
      {isLoading ? (
        <CircularProgress size={80} />
      ) : (
        <>
          <Zoom direction="up" duration={1200}>
            <Paper
              elevation={10}
              sx={{ padding: 3, marginTop: 5 }}
              variant="elevation"
              className="flex flex-col items-center gap-3"
            >
              <Avatar
                sx={{ width: 150, height: 150, marginBottom: 2 }}
                src={
                  session?.user?.image ||
                  imageUrl ||
                  'https://fakeimg.pl/150x150/1565b8/ffffff?text=No+image&font=bebas'
                }
                alt="Profile Image"
              />
              <div>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Profile Info:
                </Typography>
                <Typography variant="body1">Name: {session?.user?.name}</Typography>
                <Typography variant="body1">Email: {session?.user?.email}</Typography>
              </div>
            </Paper>
          </Zoom>
        </>
      )}
    </Layout>
  );
}
