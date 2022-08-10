import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Box mb={3}>
      <Label>
        Find contact by name
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    </Box>
  );
};

Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
