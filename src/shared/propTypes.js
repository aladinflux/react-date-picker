import PropTypes from 'prop-types';

export {
  isMaxDate,
  isMinDate,
} from 'react-calendar/dist/umd/shared/propTypes';

const allViews = ['century', 'decade', 'year', 'month'];
const allValueTypes = [...allViews.slice(1), 'day'];

export const isValueType = PropTypes.oneOf(allValueTypes);
