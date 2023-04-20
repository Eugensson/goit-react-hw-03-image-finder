import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryContainer } from 'components/ImageGallery/ImageGallery.styled';

class ImageGallery extends Component {
  render() {
    const { data, modalClick } = this.props;
    return (
      <ImageGalleryContainer>
        {data.map(item => (
          <ImageGalleryItem key={item.id} item={item} modalClick={modalClick} />
        ))}
      </ImageGalleryContainer>
    );
  }
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
