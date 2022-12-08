import { useDate } from 'hooks/useDate';
import { FooterWrap, Content } from './Footer.styled';

export const Footer = () => {
  const { fullDate } = useDate();
  return (
    <FooterWrap>
      <Content>
        <p>Today's date is {fullDate}</p>
        <p>Don't waste time - call</p>
      </Content>
    </FooterWrap>
  );
};
