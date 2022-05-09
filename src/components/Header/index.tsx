import { ButtonDiv, Container, TitleDiv } from './styles';
import { FiAward } from 'react-icons/fi';
import { Session } from '../../utils/type';
import { AuthButton } from '../AuthButton';

interface HeaderProps {
  session: Session | null;
}

export function Header({ session }: HeaderProps) {
  return (
    <Container>
      <TitleDiv>
        <FiAward />
        May Answer
      </TitleDiv>
      <ButtonDiv>{session && <AuthButton session={session} />}</ButtonDiv>
    </Container>
  );
}
