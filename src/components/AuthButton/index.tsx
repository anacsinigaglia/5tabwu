import { signIn, signOut } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { Session } from '../../utils';
import { Button } from './styles';

interface AuthButtonProps {
  session?: Session | null;
}

export function AuthButton({ session }: AuthButtonProps) {
  return (
    <Button onClick={() => (session ? signOut() : signIn('google'))}>
      <FaGoogle color="var(--primary)" />
      {session ? session.user?.name : 'Sign in with Google'}
      {session && <FiX className="close" />}
    </Button>
  );
}
