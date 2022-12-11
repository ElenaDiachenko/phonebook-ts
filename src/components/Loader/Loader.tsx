import { ClipLoader } from 'react-spinners';
import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <ClipLoader color="#e5930e" size={100} />
    </LoaderWrap>
  );
};
