import { useDate } from 'hooks/useDate';
import { FooterWrap } from './Footer.styled';

export const Footer = () => {
  const { fullDate } = useDate();
  return (
    <FooterWrap>
      <p>Today's date is {fullDate}</p>
      <p>Don't waste time - call</p>
    </FooterWrap>
  );
};
