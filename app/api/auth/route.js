import { NextResponse } from 'next/server';
import jwtDecode from 'jwt-decode';

const fakeTokens = {
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczNDA5Mjc3MSwiaWF0IjoxNzMzNDg3OTcxLCJqdGkiOiIxMzU4MGY2NmViMjI0ZWZmODA1ZjA0YmE3ZDAyMzIzNiIsInVzZXJfaWQiOjF9.1uoROlH3VNHz8M1_rKs764D3Fhmv1gU1cWVCUTvvG1I",
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMzNDg4ODcxLCJpYXQiOjE3MzM0ODc5NzEsImp0aSI6IjBlM2I3NTExNGRiYTQ3NmQ4ZDZjZWM4NWIwYTQ5NDc5IiwidXNlcl9pZCI6MX0.qpoIq6KPYlZtYG5OfE8TE-hoG5zsrxOhnyZXqjx4d_A"
};

export async function GET (Request) {
    try {
      const { access, refresh } = fakeTokens;
      let response = NextResponse.json({ accessToken: access, refreshToken: refresh });
      response.cookies.set('accessToken', access, { httpOnly: true });
      response.cookies.set('refreshToken', refresh, { httpOnly: true });
      return response;
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch tokens' }, { status: 500 });
    }
}
