import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../models/User';
import db from '../../../utils/db';

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await db.connect();
        const user = await User.findOne({
          email: credentials.email,
        });
        await db.disconnect();
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return { name: user.name, email: user.email };
        }
        throw new Error('email ou senha incorretos');
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwtToken({ token, user }) {
      const newToken = { ...token };
      if (user?._id) newToken._id = user._id;
      if (user?.isAdmin) newToken.isAdmin = user.isAdmin;
      return newToken;
    },
    async jwtSession({ session, token }) {
      const newSession = { ...session };
      if (token?._id) newSession._id = token._id;
      if (token?.isAdmin) newSession.isAdmin = token.isAdmin;
      return newSession;
    },
  },
  pages: { sigIn: '/login' },
  secret: process.env.NEXTAUTH_SECRET,
});
