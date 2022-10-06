import { StyledBtn } from './Button.styled';
export const Button = ({ children, onClick }) => {
  return <StyledBtn onClick={() => onClick()}>{children}</StyledBtn>;
};
