import PropTypes from 'prop-types';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn.styled';

function LoadMoreButton({ handleLoadMore }) {
  return (
    <LoadMoreBtn onClick={handleLoadMore} type="button">
      Load More
    </LoadMoreBtn>
  );
}

LoadMoreButton.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default LoadMoreButton;
