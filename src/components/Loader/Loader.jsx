import { ClipLoader } from 'react-spinners';

import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <ClipLoader color="#e5930e" height={200} width={200} />
    </LoaderWrap>
  );
};
