import PropTypes from 'prop-types';
import {
  GalleryItem,
  GalleryItemImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

function ImageGalleryItem({ item, modalClick }) {
  return (
    <GalleryItem onClick={() => modalClick(item.largeImageURL)}>
      <GalleryItemImage src={item.webformatURL} alt={item.tags} />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  modalClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
