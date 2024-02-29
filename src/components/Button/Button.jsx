import PropTypes from 'prop-types';

import { Btn } from './Button.styled';

const Button = ({ handleLoadMore }) => {
  return (
    <Btn type="button" onClick={handleLoadMore}>Load more</Btn>
  )
}

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default Button;
