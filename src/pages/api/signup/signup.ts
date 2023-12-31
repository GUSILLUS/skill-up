import { NextApiRequest, NextApiResponse } from 'next';

import { clientPromise } from '@/shared/utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password, name, file } = req.body;

    try {
      const client = await clientPromise;
      const usersCollection = client.db(process.env.DB_NAME).collection('users');

      const user = await usersCollection.findOne({ email });

      if (user) {
        return res.status(409).json({ message: 'Email is already exist' });
      } else {
        await usersCollection.insertOne({
          name: name,
          email: email.toLowerCase(),
          password,
          file,
        });

        res.status(200).json({ message: 'User registered successfully' });
      }
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'An error occurred' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
