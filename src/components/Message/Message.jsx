import propTypes from 'prop-types';
import { StyledMessage } from './Message.styled';

export const Message = ({ children }) => {
  return <StyledMessage>{children}</StyledMessage>;
};

Message.prototype = {
  children: propTypes.element.isRequired,
};
