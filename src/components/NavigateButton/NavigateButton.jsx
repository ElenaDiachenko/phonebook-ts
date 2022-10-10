import propTypes from 'prop-types';
import { Button } from './NavigateButton.styled';

export const NavigateButton = ({ children, path }) => {
  return <Button to={path}>{children}</Button>;
};

NavigateButton.prototype = {
  children: propTypes.element.isRequired,
  path: propTypes.string.isRequired,
};
