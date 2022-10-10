import PropTypes from 'prop-types';
import { StyledBtn } from './Button.styled';
export const Button = ({ children, onClick }) => {
  return <StyledBtn onClick={() => onClick()}>{children}</StyledBtn>;
};

Button.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.element.isRequired,
};
