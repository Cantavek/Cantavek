import NextAuth, { NextAuthOptions } from 'next-auth';
// import Google from 'next-auth/providers/google';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import { client } from '@/feature/sanity';

const options: NextAuthOptions = {
  providers: [
    // GitHub({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET
    // }),
    SanityCredentials(client)
  ],
  session: {
    strategy: 'jwt'
  },
  adapter: SanityAdapter(client)
};

export default NextAuth(options);