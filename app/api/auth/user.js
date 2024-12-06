import axios from 'axios';
import { withIronSessionApiRoute } from 'iron-session/next';

const sessionOptions = {
  password: 'your-secret-key',
  cookieName: 'session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const response = await axios.get('https://your-auth-endpoint.com/token', {
        headers: {
          'Authorization': `Bearer ${req.session.accessToken}`,
        },
      });
      const { accessToken, refreshToken } = response.data;

      req.session.accessToken = accessToken;
      req.session.refreshToken = refreshToken;
      await req.session.save();

      res.json({ accessToken, refreshToken });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tokens' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

export default withIronSessionApiRoute(handler, sessionOptions);