import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Label, Input } from './Filter.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  // const filterHandler = e => {
  //   const { value } = e.target;
  //   setFilter(value.toLowerCase().trim());
  // };

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

Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
