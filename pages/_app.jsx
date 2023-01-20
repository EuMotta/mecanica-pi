import '../styles/globals.css';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps: { session, ...pageProps } }) => (
  <SessionProvider session={session}>
    {Component.auth ? (
      <Auth>
        <Component {...pageProps} />
      </Auth>
    ) : (
      <Component {...pageProps} />
    )}
  </SessionProvider>
);
const Auth = ({ children, adminOnly }) => {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized?message=Por favor, acesse a sua conta.');
    },
  });
  if (status === 'loading') {
    return <div>Carregando...</div>;
  }
  if (adminOnly && !session.user.isAdmin) {
    router.push(
      '/unauthorized?message=Se você é um administrador acesse a sua conta.',
    );
  }

  return children;
};

export default App;
