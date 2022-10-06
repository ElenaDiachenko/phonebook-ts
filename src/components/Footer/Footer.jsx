import { FooterWrap } from './Footer.styled';

export const Footer = () => {
  const today = new Date();
  return (
    <FooterWrap>
      <p>{today.getFullYear()}</p>
    </FooterWrap>
  );
};
