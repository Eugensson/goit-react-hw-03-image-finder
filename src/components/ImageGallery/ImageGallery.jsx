import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryContainer } from 'components/ImageGallery/ImageGallery.styled';

function ImageGallery({ data, modalClick }) {
  return (
    <ImageGalleryContainer>
      {data.map(item => (
        <ImageGalleryItem key={item.id} item={item} modalClick={modalClick} />
      ))}
    </ImageGalleryContainer>
  );
}

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  modalClick: PropTypes.func.isRequired,
};

export default ImageGallery;
