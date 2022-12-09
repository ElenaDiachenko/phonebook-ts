import { FC } from 'react';
import { Button } from './NavigateButton.styled';

interface IProps {
  children: React.ReactElement;
  path: string;
}

export const NavigateButton: FC<IProps> = ({ children, path }) => {
  return <Button to={path}>{children}</Button>;
};
