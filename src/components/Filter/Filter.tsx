import { Box } from 'components/Box';
import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Box mb={3}>
      <Label>
        Find contact by name
        <Input
          type="text"
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </Label>
    </Box>
  );
};
