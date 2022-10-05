import { MdOutlineContactPhone } from 'react-icons/md';
import { LogoContainer } from './Logo.styled';
export const Logo = () => {
  return (
    <LogoContainer to="/">
      <MdOutlineContactPhone style={{ width: '22px', height: '22px' }} />
    </LogoContainer>
  );
};
