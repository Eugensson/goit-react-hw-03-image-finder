import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components';

import { ImageGalleryContainer } from './ImageGallery.styled';

function ImageGallery({ data, modalClick }) {
  return (
    <ImageGalleryContainer>
      {data.map(({largeImageURL, webformatURL, tags }, index) => (
        <ImageGalleryItem
          key={index}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          modalClick={modalClick}
        />
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
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
  modalClick: PropTypes.func.isRequired,
};

export default ImageGallery;
