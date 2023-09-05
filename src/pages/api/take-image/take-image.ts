import { NextApiRequest, NextApiResponse } from 'next';

import { clientPromise } from '@/shared/utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const email = req.query.email as string;
    try {
      const client = await clientPromise;
      const usersCollection = client.db(process.env.DB_NAME).collection('users');

      const user = await usersCollection.findOne({ email });

      if (user) {
        return res.status(200).json({ file: user.file });
      } else {
        return res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error taking image:', error);
      res.status(500).json({ message: 'An error occurred' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
