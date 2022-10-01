import { useSelector, useDispatch } from 'react-redux';
import { selectUsername } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import { Box } from 'components/Box';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);
  return (
    <Box display="flex">
      <p>Welcome {name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Box>
  );
};
