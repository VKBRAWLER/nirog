"use server";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { cookies } from 'next/headers'
import {jwtDecode} from 'jwt-decode';

const Auth = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const checkToken = async () => {
    try {
      const cookieStore = cookies();
      const accessToken = cookieStore.get('accessToken');
      console.log('Access token:', accessToken);
      return;
      if (!accessToken) {
        setAuthenticated(false);
        throw new Error('No access token found');
      }
      const decodedToken = jwtDecode(accessToken);
      const currentTime = Math.floor(Date.now() / 1000);
      console.log('Decoded token:', decodedToken);
      console.log('Current time:', currentTime);
      console.log('Token expiry:', decodedToken.exp);
      if (decodedToken.exp < currentTime) {
        throw new Error('Token is expired');
      }
      setAuthenticated(true);
    } catch (error) {
      console.error('Failed to authenticate:', error);
      setAuthenticated(false);
      // router.push('/signin');
    }
  };
  useEffect(() => {
    checkToken();
  }, [router]);

  if (!authenticated) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default Auth;