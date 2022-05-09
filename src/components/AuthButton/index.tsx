import { signIn, signOut } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { Session } from '../../utils/type';
import { Container } from './styles';

interface AuthButtonProps {
  session: Session | null;
}

export function AuthButton({ session }: AuthButtonProps) {
  return (
    <Container onClick={() => (session ? signOut() : signIn('google'))}>
      <FaGoogle color="var(--primary)" />
      {session ? session.user?.name : 'Sign in with Google'}
      {session && <FiX />}
    </Container>
  );
}
