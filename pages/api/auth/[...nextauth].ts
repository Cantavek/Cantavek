import NextAuth, { NextAuthOptions } from 'next-auth';
// import Google from 'next-auth/providers/google';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import { client } from '@/feature/sanity/client';
import { getUserByEmail } from '@/feature/sanity';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_URL,
  providers: [
    // GitHub({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET
    // }),
    // 2024-01-05 19:37
    SanityCredentials(client)
  ],
  session: {
    strategy: 'jwt'
  },
  adapter: SanityAdapter(client),
  callbacks: {
    async session({ session }) {
      if(session?.user) {
        session.user = await getUserByEmail(session.user.email as string)
        return session
      }
      return session
    }
  }
};

export default NextAuth(authOptions);