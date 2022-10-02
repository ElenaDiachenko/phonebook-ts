import { ClipLoader } from 'react-spinners';

import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <ClipLoader color="#3498db" height={100} width={100} />
    </LoaderWrap>
  );
};
